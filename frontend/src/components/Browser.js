import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import Api from '../util/Api';
import ValidationError from '../util/ValidationError';
import Image from './Image';
import FormField from './FormField';
import '../CSS/browser.scss';
import '../CSS/tooltip.scss';
import ColorPalette from './ColorPicker';
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams, Link } from 'react-router-dom';

export default function Browser({state, setState}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [moreImages, setMoreImages] = useState(false);
    const [page, setPage] = useState(1);
    const [activeFilters, setActiveFilters] = useState([]);
    const inactiveFilters = ["Keyword", "Author", "Color count", "Size", "Date", "Transparency", "Tolerance"];
    const { register, watch, handleSubmit, control } = useForm({defaultValues: state.filters});
    const { fields , append, remove } = useFieldArray({
        control,
        name: "filters",
    });

    useEffect(()=>{
        if(state.filters && Object.keys(state.filters)){
            if (!Object.keys(state.filters).length == 0) {
                for (const filter in state.filters) {
                    addFilter(capitalize(filter));
                }       
            }
        }
    },[])

    useEffect(()=>{
        if(loading===true){
            getImages();
        }
    }, [state])

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const onSubmit = filters => {
        setPage(1);
        setMoreImages(true);
        setData([]);
        setLoading(true);
        setState(state => ({...state, filters}));
    };

    const addFilter = (filter) => {
        setActiveFilters([...activeFilters, filter]);
        append({ filter });
    }

    const removeFilter = (filter, index) => {
        setActiveFilters(activeFilters.filter(item => item !== filter));  
        remove(index);
    }

    return (
        <>
            <div className="top-bar">
                <div id="header">
                    <p>Pixel Art by Color</p>
                    <Link className={"no-decoration"}  to={{pathname:'/about'}}><p>About</p></Link>
                </div>
                <p>Add a color or filter to get started</p>
                
                <h3>Color</h3>

                <ColorPalette state={state} setState={setState}/>
                
                <p>
                    <h3>Add filter</h3>
                
                    <select
                        
                        onChange={e => addFilter(e.target.value)}>
                        <option value="empty">+</option>
                        {inactiveFilters.map((filter) =>
                            !activeFilters.includes(filter)&&
                            <option key={filter} value={filter}>{filter}</option>
                        )}
                    </select> 
                </p>
                
                <form>
                    <div>
                        {fields.map((field, index) => {
                            return (
                                <div className="filter-box" key={field.id}>
                                    <FormField register={register} watch={watch} filter={field.filter} /> 
                                    <button type="button" onClick={()=> removeFilter(field.filter, index)}>X</button>
                                </div>
                            )       
                        })}
                    </div>
                        {state.colorPalette.length < 1 && activeFilters.length < 1? null
                        :<button id="search-button" type="submit" onClick={handleSubmit(onSubmit)}>Search</button>}
                    
                </form>
            </div>
            <ShowArtworks/>  
        </>
    )

    function ShowArtworks() {
        return(
            <div>
                <h3 style={{color: '#eeeeee', margin: '20px'}}>                      
                            <span className="tooltip">
                                <span className="tooltiptext">
                                    Sorted by date, newest to oldest.
                                </span>
                                Results
                            </span>
                            <span className="float-right">
                                {data.length == 50? data.length.toString() + "+" : data.length} entries found
                            </span>
                </h3>
                    <InfiniteScroll
                        className="grid-container"
                        dataLength={data.length}
                        next={getImages}
                        hasMore={moreImages}
                        loader={<p>Loading more images</p>}
                    >
                        {data.map((image, i) =>
                            <Image image={image} key={i} state={state} setState={setState}/>
                        )}
                        {data.length === 50? <button onClick={()=>getImages()}>Load more</button>:null}
                    </InfiniteScroll> 
                    

            </div>
        )
    }


    function getImages(){

        function validator(response){}

        function onSucces(response){
            if (response.data.length > 0){
                setLoading(false);
                setData(data.concat(response.data));
                setPage(page+1);
            }else{
                setMoreImages(false);
            }
        }

        function onFailure(){
            throw new ValidationError("Failed");
        }

        Api.get('/api', validator, onSucces, onFailure, {
            headers:{
                'colorarray': state.colorPalette,
                'keyword': state.filters.keyword, 
                'author': state.filters.author,
                'colormin': state.filters.colorMin,
                'colormax': state.filters.colorMax,
                'sizetype': state.filters.sizeType,
                'height': state.filters.height,
                'width': state.filters.width,
                'beforeDate': state.filters.beforeDate,
                'afterDate': state.filters.afterDate,
                // 'animation': state.filters.animation,
                'transparency': state.filters.transparency,
                'tolerance': state.filters.tolerance,
                'page': page
            }
        })
    }}
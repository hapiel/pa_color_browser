import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import { Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import Api from '../util/Api';
import ValidationError from '../util/ValidationError';
import Image from './Image';
import FormField from './FormField';
import ColorPalette from './ColorPicker';
import '../CSS/browser.scss';
import '../CSS/tooltip.scss';
import loadingIcon from '../icons/loading.gif';

export default function Browser({state, setState}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [moreImages, setMoreImages] = useState(false);
    const [page, setPage] = useState(1);
    const [activeFilters, setActiveFilters] = useState([]);
    const inactiveFilters = ["Keyword", "Author", "Color count", "Size", "Date", "Transparency", "Tolerance"];
    const { register, watch, handleSubmit, control } = useForm({defaultValues: state.filters});
    const { fields , append, remove } = useFieldArray({control, name: "filters",});

    useEffect(()=>{
        if(state.filters && Object.keys(state.filters)){
            if (!Object.keys(state.filters).length == 0) {
                if(state.filters.keyword){
                    addFilter("Keyword");
                }
                if(state.filters.author){
                    addFilter("Author");
                }
                if(state.filters.colorMin && state.filters.colorMax){
                    addFilter('Color count');
                }
                if(state.filters.sizeType && state.filters.width && state.filters.height){
                    addFilter('Size');
                }
                if(state.filters.afterDate && state.filters.beforeDate){
                    addFilter('Date');
                }
                if(state.filters.transparency){
                    addFilter("Transparency");
                }
                if(state.filters.tolerance){
                    addFilter("Tolerance");
                }
                else return;
            }
        }
    },[])

    useEffect(()=>{
        if(loading===true){
            getImages();
        }
    }, [state])

    const onSubmit = filters => {
        setPage(1);
        setMoreImages(true);
        setData([]);
        setLoading(true);
        setMessage('Loading');
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
                <p style={{fontSize: '12px', margin: 0}}>Add a color or filter to get started</p>
                
                <h3>Color</h3>

                <ColorPalette state={state} setState={setState}/>
                
                <div>
                    <h3>Add filter</h3>
                
                    <select style={{marginBottom: '10px'}} onChange={e => addFilter(e.target.value)}>
                        <option value="empty">+</option>
                        {inactiveFilters.map((filter) =>
                            !activeFilters.includes(filter)&&
                                <option key={filter} value={filter}>
                                    {filter}
                                </option>
                        )}
                    </select> 
                </div>
                
                <form>
                    <div style={{marginBottom: '10px'}}>
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

            <h3 style={{color: '#eeeeee', margin: '1em'}}>                      
                <span className="tooltip">
                    <span className="tooltiptext">
                        Sorted by date, newest to oldest.
                    </span>
                    {message==="Results" && message}
                </span>
                {data.length > 0 && 
                    <span className="float-right">
                        {data.length == 50 ? data.length.toString() + "+" : data.length} entries found
                    </span>
                }
            </h3>
            {message==="Loading" 
                &&
                <div style={{
                    height: '25%',
                    position: 'relative',
                }}>
                    <img 
                        src={loadingIcon} 
                        alt="loading..."
                        style={{
                            position: 'absolute',
                            left:0,
                            top:0,
                            right: 0,
                            bottom: 0,
                            margin: 'auto',
                        }} 
                    />
                </div>
            } 
            <ShowArtworks/>  
        </>
    )

    function ShowArtworks() {
        return(
            <div>
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
                setMessage("Results");
                setData(data.concat(response.data));
                setPage(page+1);
            }else{
                setMessage("No entries found");
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
import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import Api from '../util/Api';
import ValidationError from '../util/ValidationError';
import Color from './Color';
import Image from './Image';
import FormField from './FormField';
import '../CSS/browser.scss';
import '../CSS/tooltip.scss';
import ColorPalette from './ColorPicker';

export default function Browser({state, setState}) {
    let newfilter = true;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(3);
    const [activeFilters, setActiveFilters] = useState([]);
    const inactiveFilters = ["Keyword", "Author", "Color count", "Size", "Date", "Transparency", "Tolerance"];
    const { register, control, handleSubmit } = useForm({defaultValues: state.filters});
    const { fields , append, remove } = useFieldArray({
        control,
        name: "filters"
    });

    const onSubmit = filters => {
        setIsLoading(1);
        setState(state => ({...state, filters}));
    };

    useEffect(() => {
        if(isLoading===1){
            getImages();
        }
    }, [state])

    const addFilter = (filter) => {
        setActiveFilters([...activeFilters, filter]);
        append({ filter });
    }

    const removeFilter = (filter, index) => {
        setActiveFilters(activeFilters.filter(item => item !== filter));  
        remove(index);
    }

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    return (
        <>
            <div className="top-bar">

                <ColorPalette state={state} setState={setState}/>
                
                <p>
                    Add filter:    
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
                                    <FormField filter={field.filter} register={register}/> 
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
        let message = "";
        if(isLoading === 0) {message = "Results"}
        if(isLoading === 1) {message = "Loading..."}
        if(isLoading === 2) {message = "No results. Consider removing colors or filters, or inrease tolerance."}
        if(isLoading === 3) {message = "Enter search query above"} 

        return(
            <div>
                <h3 style={{color: '#eeeeee', margin: '20px'}}>{message === "Results"? <span className="tooltip"><span className="tooltiptext">Sorted by date, newest to oldest.</span>Results</span> : message}</h3>
                {isLoading === 0 &&
                    <div className="grid-container">
                        {data.map((image, i) =>
                            <Image image={image} key={i} state={state} setState={setState}/>
                        )}
                    </div>
                }
            </div>
        )
    }


    function getImages(){
        function validator(response){}

        function onSucces(response){
            if (response.data.length > 0){
                console.log(response);
                setData(response.data);
                setIsLoading(0);
            } else {
                setIsLoading(2);
            }
        }

        function onFailure(){
            throw new ValidationError("Failed");
        }

        setIsLoading(1);
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
                'tolerance': state.filters.tolerance
            }
        })
    }
}
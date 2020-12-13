import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
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
    const { register, handleSubmit } = useForm({defaultValues: state.filters});
    const [activeFilters, setActiveFilters] = useState([]);
    const [inactiveFilters, setInactiveFilters] = useState(["Keyword", "Author", "Color count", "Size", "Date", "Transparency", "Tolerance"]);

    const onSubmit = filters => {
        setIsLoading(1);
        setState(state => ({...state, filters}));
    };

    useEffect(() => {
        if(isLoading===1){
            getImages();
        }
    }, [state])

    return (
        <>
            <div className="top-bar">

                <ColorPalette state={state} setState={setState}/>
                
                <form>
                    <p>
                        Add filter:   
                        <select id="filter-dropdown" name="newFilter" onChange={(e) => {filterDropdown(e.target.value)}} >
                                <option value="empty">+</option>
                                    {inactiveFilters.map((filter, i) =>
                                        activeFilters.includes(filter)?<></>:<option value={filter}>{filter}</option>
                                    )}
                        </select>          
                    </p>

                    <div>
                        {activeFilters.length > 0? activeFilters.map((filter, index)=>
                            <div className="filter-box">
                                {/* {filter} */}
                                <FormField filter={filter} register={register}/> 
                            <button onClick={() => closeFilter(filter)} type="button" >X</button></div>
                        ):null}
                    </div>
                    <button type="submit" onClick={handleSubmit(onSubmit)}>Search</button>
                </form>
            </div>
            <ShowArtworks/>  
        </>
    )
    
    function filterDropdown(filter){
        if (filter !== "") {
            // setInactiveFilters(inactiveFilters.filter(item => item !== filter));
            setActiveFilters([...activeFilters, filter]);
            document.getElementById("filter-dropdown").value = "empty";
        }
    }

    function closeFilter(filter){
        setActiveFilters(activeFilters.filter(item => item !== filter));       
        // setInactiveFilters(inactiveFilters.concat(filter));
    }

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
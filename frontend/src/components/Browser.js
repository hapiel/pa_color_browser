import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Api from '../util/Api';
import ValidationError from '../util/ValidationError';
import Color from './Color';
import SearchFields from './SearchFields';
import Image from './Image';
import FormField from './FormField';
import '../CSS/browser.css';

export default function Browser({state, setState}) {
    let newfilter = true;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(3);
    const { register, handleSubmit } = useForm({defaultValues: state.filters});
    const onSubmit = filters => {
        setIsLoading(1);
        setState(state => ({...state, filters}));
    };

    useEffect(() => {
        if(isLoading===1){
            getImages();
        }
    }, [state])

    const [activeFilters, setActiveFilters] = useState([ ]);
    const [inactiveFilters, setInactiveFilters] = useState(["Keyword", "Author", "Color count", "Size", "Date", "Animation", "Transparency" ])

    return (
        <>
            <div className="top-bar">
                <Color state={state} setState={setState}/>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        Add filter:   
                        <select id="filter-dropdown" name="newFilter" onChange={(e) => {filterDropdown(e.target.value)}} >
                                <option value="empty">+</option>
                            {inactiveFilters.map((filter, i) =>
                                        <option value={filter}>{filter}</option>
                                    )}
                        </select>
                            
                    </div>


                    {activeFilters.map((filter, index)=>{
                        return <div className="filter-box"><FormField filter={filter} register={register} inactive={inactiveFilters}/> <button>X</button></div>
                    })}
                    
                    <input id="search-button" type="submit" />
                </form>
            </div>
            <ShowArtworks/>  
        </>
    )
    
    function filterDropdown(filter){
        if (filter !== "") {
            for( var i = 0; i < inactiveFilters.length; i++){ 
            
                if ( inactiveFilters[i] === filter) { 
                    setInactiveFilters(inactiveFilters.filter(item => item.filter !== filter));
                }
            }
            setActiveFilters([...activeFilters, filter]);
            document.getElementById("filter-dropdown").value = "empty";
        }
    }

    function ShowArtworks() {
        let message = "";
        if(isLoading === 0) {message = "Results"}
        if(isLoading === 1) {message = "Loading..."}
        if(isLoading === 2) {message = "No results. Consider increasing the color tolerance, or removing colors"}
        if(isLoading === 3) {message = "Enter search query above"} 

        return(
            <div>
                <h3 style={{color: '#eeeeee', margin: '20px'}}>{message}</h3>
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
                'author': state.filters.author
            }
        })
    }
}
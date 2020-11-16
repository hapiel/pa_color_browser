import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import Api from '../util/Api';
import ValidationError from '../util/ValidationError';
import Color from './Color';
import SearchFields from './SearchFields';
import Image from './Image';
import '../CSS/browser.css';

export default function Browser() {
    const [data, setData] = useState([]);
    const [state, setState] = useState({colorPalette: [], tolerance: '', keyword: '', author: ''});
    const [isLoading, setIsLoading] = useState(3);
    const location = useLocation();

    useEffect(() => {
        if(location.prevPath){
            setState(location.state);
        }
    },[location.prevPath]);

    return (
        <>
            <div className="top-bar">
                <Color state={state} setState={setState}/>
                <SearchFields state={state} setState={setState}/>
                <button id="search-button" onClick={()=>getImages()}>search</button>
            </div>
            <ShowArtworks/>  
        </>
    )

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
                            <Image image={image} i={i} state={state} setState={setState}/>
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
        Api.get('/api', validator, onSucces, onFailure, {headers:{'colorarray': state.colorPalette, 'tolerance': state.tolerance, 'keyword': state.keyword, 'author': state.author}})
    }
}
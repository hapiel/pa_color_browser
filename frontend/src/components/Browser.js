import React, { useEffect, useState } from 'react';
import Api from '../util/Api';
import ValidationError from '../util/ValidationError';
import Color from './Color';
import SearchFields from './SearchFields';
import Image from './Image';
import '../CSS/browser.css';

export default function Browser({...props}) {
    const [state, setState] = useState([]);
    //0 = results, 1 = loading, 2 =  no images, 3 = app start
    const [isLoading, setIsLoading] = useState(3);
    const [colorPalette, setColorPalette] = useState([]);
    const [tolerance, setTolerance] = useState();
    const [keyword, setKeyword] = useState();
    const [author, setAuthor] = useState();

    useEffect(() => {
        setColorPalette(props.location.colorPalette)
    },[props.location.prevPath]);

    return (
        <>
            <div className="top-bar">
                <Color colorPalette={colorPalette} setColorPalette={setColorPalette}/>
                <SearchFields setTolerance={setTolerance} setKeyword={setKeyword} setAuthor={setAuthor}/>
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
                        {state.map((image, i) =>
                            <Image image={image} i={i} colorPalette={colorPalette}/>
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
                setState(response.data);
                setIsLoading(0);
            } else {
                setIsLoading(2);
            }
        }

        function onFailure(){
            throw new ValidationError("Failed");
        }

        setIsLoading(1);
        Api.get('/api', validator, onSucces, onFailure, {headers:{'colorarray': colorPalette, 'tolerance': tolerance, 'keyword': keyword, 'author': author}})
    }
}
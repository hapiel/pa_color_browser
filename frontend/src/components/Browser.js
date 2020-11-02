import React, { useEffect, useState } from 'react';
import Api from '../util/Api';
import ValidationError from '../util/ValidationError';
import Color from './Color';
import SearchFields from './SearchFields';
import Image from './Image';
import '../CSS/browser.css';

export default function Browser() {
    const [state, setState] = useState([]);
    //0 = results, 1 = loading, 2 =  no images, 3 = app start
    const [isLoading, setIsLoading] = useState(4);
    const [colorPalette, setColorPalette] = useState();
    const [tolerance, setTolerance] = useState();
    const [keyword, setKeyword] = useState();
    const [author, setAuthor] = useState();

    return (
        <>
            <div className="top-bar">
                <Color setColorPalette={setColorPalette}/>
                <SearchFields setTolerance={setTolerance} setKeyword={setKeyword} setAuthor={setAuthor}/>
                <button id="search-button" onClick={()=>getImages()}>search</button>
            </div>
            
            <div className="grid-container">
                <ShowArtworks/>  
            </div>
        </>
    )

    function ShowArtworks() {
        if (isLoading === 1) {
            return <h3>Loading...</h3>
        } 
        if (isLoading === 2) {
            return <span><h3>No results. </h3> <p> Consider increasing the color tolerance, or removing colors</p></span>
        } 
        if (isLoading === 3) {
            return <h3>Enter search query above </h3> 
        } 
        return state.map((image, i) =>
            <Image image={image} i={i}/>
        );
    }

    function getImages(){
        function validator(response){}

        function onSucces(response){
            console.log(response.data);
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
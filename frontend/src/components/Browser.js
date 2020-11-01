import React, { useEffect, useState } from 'react';
import Api from '../util/Api';
import ValidationError from '../util/ValidationError';
import Color from './Color';
import SearchFields from './SearchFields';
import Image from './Image';
import '../CSS/browser.css';

export default function Browser() {
    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        //getImages()
    },[])

    return (
        <>
            <Color getImages={getImages}/>
            <SearchFields/>
            <div className="grid-container">
                <ShowArtworks/>  
            </div>
        </>
    )

    function ShowArtworks() {
        if (isLoading) {
            return <h3>Loading...</h3>
        } 
        return state.map((image, i) =>
            <Image image={image} i={i}/>
        );
    }

    function getImages(colorArray){
        function validator(response){

        }

        function onSucces(response){
            setState(response.data);
            setIsLoading(false);
        }

        function onFailure(){
            throw new ValidationError("Failed");
        }

        Api.get('/api', validator, onSucces, onFailure, {headers:{'colorarray': colorArray}})
    }
}
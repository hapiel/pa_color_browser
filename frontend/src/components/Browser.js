import React, { useEffect, useState } from 'react';
import Api from '../util/Api';
import ValidationError from '../util/ValidationError';
import { ChromePicker } from 'react-color';
import Color from './Color';

export default function Browser() {
    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        getImages()
    },[])

    return (
        <>
            <Color/>
            <ShowArtworks/>  
        </>
    )

    function ShowArtworks() {
        if (isLoading) {
            return <h1>Loading...</h1>
        } 
        return state.map((image, i) =>
            <div key={i}>
                <h1>{image.title}</h1>
                <img src={image.url} alt={image.title}></img>
            </div> 
        );
    }

    function getImages(){
        function validator(response){
            if(!response.data){
                throw new ValidationError("No data");
            }
        }

        function onSucces(response){
            setState(response.data);
            setIsLoading(false);
        }

        function onFailure(){
            throw new ValidationError("Failed");
        }

        Api.get('/api/yellow', validator, onSucces, onFailure)
    }
}
import React, { useEffect, useState } from 'react';
import Api from '../util/Api';
import ValidationError from '../util/ValidationError';

export default function Browser() {
    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        getImages()
    },[])

    return (
        <ShowArtworks/>      
    )

    function ShowArtworks() {
        if (isLoading) {
          return <h1>Loading...</h1>
        } 
        return state.map((image, i) =>
            <div key={i}>
                <h1>{image.title}</h1>
                <img src={image.url}></img>
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

        Api.get('http://localhost:5000/images/react', validator, onSucces, onFailure)
    }
}
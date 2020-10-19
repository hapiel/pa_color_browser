import React, { useEffect, useState } from 'react';
import Api from '../util/Api';
import ValidationError from '../util/ValidationError';

export default function Browser() {
    const [state, setState] = useState({});

    useEffect(()=>{
        getImages();
    },[])

    return (
        <div>
            <h1>Pixel Art</h1>
        </div>
    )

    function getImages(){
        function validator(reponse){
            if(!reponse.data){
                throw new ValidationError("No data");
            }
        }

        function onSucces(reponse){
            setState(reponse.data);
        }

        function onFailure(){
            throw new ValidationError("Failed");
        }

        Api.get('http://localhost:5000/images', validator, onSucces, onFailure)
    }
}
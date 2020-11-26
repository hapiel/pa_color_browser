import React from "react";

export default function FormField({register, filter}){
    switch(filter){
        case "Keyword":
            return (
                <>
                Keyword: <input name='keyword' ref={register}></input> 
                </>    
            )
        case "Author":
            return (
                <>
                Author: <input name='author' ref={register}></input> 
                </>    
            )
        case "Color count":
            return (
                <>
                Color count:
                Minimum: 
                <input name='colorMin' size="2" ref={register}></input>
                 Maximum: 
                <input name='colorMax' size="2" ref={register}></input> 
                </>    
            )
        case "Size":
            return( 
                <>
                Size: 
                    <select name="sizeType" ref={register}>
                        <option value="equal">Equals</option>
                        <option value="min">Minimum</option>
                        <option value="max">Maximum</option>
                    </select>
                     Width:  
                    <input name="height" size="2" ref={register}></input>
                     Height:  
                    <input name="width" size="2" ref={register}></input> 
                </>    
            )
            
        case "Date":
            return (
                <>
                Date before 
                    <input type="date" name="beforeDate" ref={register}></input> 
                     Date after 
                    <input type="date" name="afterDate" ref={register}></input> 
                </>    
            )
        case "Animation":
            return (
                <>
                Animation:<span className="onoff"> <input type="checkbox" name='animation' id="animation" className="onoff" ref={register}></input><label for="animation"></label></span>
                </>    
            )
        case "Transparency":
            return (
                <>
                Transparency: <span className="onoff"> <input type="checkbox" name='transparency' id="transparency" ref={register}></input><label for="transparency"></label> </span>
                </>    
            )
        default:
            return <p>NOTHING  I GUESS</p>
    }    
}
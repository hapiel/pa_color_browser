import React from "react";

export default function FormField({register, filter}){
    switch(filter){
        case "Keyword":
            return (
                <>
                Keyword: <input name='keyword' ref={register}></input> 
                </>    
            )
        case "Author":
            return (
                <>
                Author: <input name='author' ref={register}></input> 
                </>    
            )
        case "Color count":
            return (
                <>
                Color count:
                Minimum:
                <input name='colorMin' ref={register}></input>
                Maximum:
                <input name='colorMax' ref={register}></input> 
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
                    
                    <input name="height" ref={register}></input> 
                    <input name="width" ref={register}></input> 
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
                Animation: <input type="checkbox" name='animation' ref={register}></input> 
                </>    
            )
        case "Transparency":
            return (
                <>
                Transparency: <input type="checkbox" name='transparency' ref={register}></input> 
                </>    
            )
        default:
            return <p>NOTHING  I GUESS</p>
    }    
}
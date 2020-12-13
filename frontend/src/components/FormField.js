import React from "react";

export default function FormField({register, filter}){
    switch(filter){
        case "Keyword":
            return (
                <>
                <span className="tooltip"><span className="tooltiptext">Searches in title and tags</span>Keyword: </span><input id="keyword" name='keyword' ref={register}></input> 
                </>    
            )
        case "Author":
            return (
                <>
                <span className="tooltip"><span className="tooltiptext">Name or part of name</span>Author: </span><input id="author" name='author' ref={register}></input> 
                </>    
            )
        case "Color count":
            return (
                <>
                <span className="tooltip"><span className="tooltiptext">Colors are counted on frame 1 of animations</span>Color count: </span>
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
                        <option value="min">Minimum</option>
                        <option value="max">Maximum</option>
                        <option value="equal">Equals</option>
                    </select>
                     Width:  
                    <input name="width" size="2" ref={register}></input>
                     Height:  
                    <input name="height" size="2" ref={register}></input> 
                </>    
            )
            
        case "Date":
            return (
                <>
                    Date after 
                    <input type="date" name="afterDate" ref={register}></input> 
                     Date before 
                    <input type="date" name="beforeDate" ref={register}></input> 
                </>    
            )
        // case "Animation":
        //     return (
        //         <>
        //         Animation:<span className="onoff"> <input type="checkbox" name='animation' id="animation"  ref={register}></input><label htmlFor="animation"></label></span>
        //         </>    
        //     )
        case "Transparency":
            return (
                <>
                Transparency: <span className="onoff"> <input type="checkbox" name='transparency' id="transparency" ref={register}></input><label htmlFor="transparency"></label> </span>
                </>    
            )
        case "Tolerance":
            return (
                <>
                <span className="tooltip"><span className="tooltiptext">Tolerance influences how accurate the colors of your query match the colors in the search result. 0 means exact match only, 20 means your r/g/b values +/- 20 for each of those values. Default is between 7 and 25 depending on the amount of colors in the query.</span>Color tolerance: </span><input name="tolerance" size="2" ref={register}></input>
                </>    
            )
        default:
            return <p>NOTHING  I GUESS</p>
    }    
}
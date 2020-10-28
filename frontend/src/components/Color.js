import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import '../CSS/color.css';

export default function Color(){
    const [showPicker, setShowPicker] = useState(false);
    const [currentColor, setCurrentColor] = useState('#FFFFFF');
    const [colorArray, setColorArray] = useState([]);
    const [selectedColorIndex, setSelectedColorIndex] = useState();    

    function handleClick(){
        setShowPicker(!showPicker)
    };

    function handleChange(color){
        setCurrentColor(color.hex);
    };

    function handleClose(){
        setShowPicker(false)
        colorArray.push(currentColor);
    };

    function changeSelectedColor(index){
        setSelectedColorIndex(index);
        //setCurrentColor(colorArray[index]);
    }

    function ShowPallete() {
        if(colorArray.length){
            return colorArray.map((color, i) =>
            <div id="swatch" style={{
                    backgroundColor: color, 
                    border: i===selectedColorIndex?'5px solid rgba(255,255,255,1)':'5px solid rgba(255,255,255,0)'
                }} onClick={()=>changeSelectedColor(i)} key={i}>
                <div id="color"></div>
            </div>
            );
        }
        return null
    }
    
    return(
        <div>
            <ShowPallete />
            {showPicker ?
                <div id="popover">
                    <div id="cover" onClick={handleClose}/>
                    <ChromePicker color={currentColor} onChange={handleChange} disableAlpha={true}/>
                </div>
                :null
            } 

            <button onClick={handleClick}>+</button>
        </div>
    )
}


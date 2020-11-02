import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import '../CSS/color.css';

export default function Color({setColorPalette}){
    const [showPicker, setShowPicker] = useState(false);
    const [currentColor, setCurrentColor] = useState();
    const [colorArray, setColorArray] = useState([]);
    const [selectedColorIndex, setSelectedColorIndex] = useState();    

    function handleClick(){
        setColorArray([...colorArray, '#FFFFFF'])
        setCurrentColor('#FFFFFF');
        setSelectedColorIndex(colorArray.length);
        setShowPicker(true);
    };

    function handleChange(color){
        setCurrentColor(color.hex);
        colorArray[selectedColorIndex] = color.hex;
    };

    function handleClose(){
        setShowPicker(false);
        setSelectedColorIndex();
        setColorPalette(colorArray);
    };

    function adjustColor(index){
        setSelectedColorIndex(index);
        setCurrentColor(colorArray[index]);
        setShowPicker(!showPicker);
    }

    function ShowPallete() {
        if(colorArray.length){
            return colorArray.map((color, i) =>
                <div id="swatch" style={{
                        backgroundColor: color, 
                        border: i===selectedColorIndex?'5px solid rgba(255,255,255,1)':'5px solid rgba(255,255,255,0)'
                    }} onClick={()=>adjustColor(i)} key={i}>
                    <div className="color"></div>
                </div>
            );
        }
        return null
    }

    function removeAll(){
        setColorArray([]);
        setColorPalette([]);
    }
    
    return(
        <div>
            <h3>Color</h3>
            <div id={"palette"} className="color-search-container">
                <ShowPallete />
                <button className="button-large" onClick={handleClick}>+</button>
                <button className="button-large" onClick={()=>removeAll()}>REMOVE ALL</button>
                
            </div>

            {showPicker ?
                <div id="popover">
                    <div id="cover" onClick={handleClose}/>
                    <ChromePicker color={currentColor} onChange={handleChange} disableAlpha={true}/>
                </div>
                :null
            }
        </div>
    )
}


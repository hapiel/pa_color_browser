import React, { useEffect, useState, useRef, createRef } from 'react';
import { ChromePicker } from 'react-color';

export default function ColorPicker({state, setState}){
    const [selectedIndex, setSelectedIndex] = useState();
    const [colorPickerPos, setColorPickerPos] = useState({x: 0, y: 0});
    const paletteRef = useRef([]);

    useEffect(()=>{
        if(typeof selectedIndex !== 'undefined'){
            let rect = paletteRef.current[selectedIndex].getBoundingClientRect();
            setColorPickerPos({x: rect['x'], y: rect['y']})
        }
    }, [selectedIndex])
    
    const newColor = () => {
        let paletteCopy = state.colorPalette;
        paletteCopy.push('#ffffff');
        setState(state => ({...state, colorPalette: paletteCopy}));
        setSelectedIndex(state.colorPalette.length-1);
    }

    const handleColorChange = (color) => {
        let paletteCopy = state.colorPalette;
        paletteCopy[selectedIndex] = color.hex;
        setState(state => ({...state, colorPalette: paletteCopy}));
    }

    const DisplayPalette = () => {
        if(state.colorPalette.length){
            return state.colorPalette.map((color, i) =>
                <div 
                    id="swatch" 
                    style={{
                        backgroundColor: color, 
                        border: i===selectedIndex?'5px solid rgba(255,255,255,1)':'5px solid rgba(255,255,255,0)'
                    }} 
                    onClick={()=>setSelectedIndex(i)} key={i}
                    ref={el => (paletteRef.current[i] = el)}
                >
                    <div className="color"></div>
                </div>
            );
        }
        return null
    }

    return(
        <div>
            <div id={"palette"} className="color-search-container">
                <DisplayPalette/>
                <button className="button-large" onClick={newColor}>+</button>
            </div>
            
            <div style={{ position: 'absolute', display: 'inline-block', 'left': colorPickerPos.x, 'top': colorPickerPos.y + 40}}>
                <ChromePicker color={state.colorPalette[selectedIndex]} onChange={handleColorChange} disableAlpha={true}/>
            </div>
        </div>
    )
}
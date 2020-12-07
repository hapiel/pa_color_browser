import React, { useEffect, useState, useRef } from 'react';
import { ChromePicker } from 'react-color';
import '../CSS/colorPicker.scss';

export default function ColorPicker({state, setState}){
    const [selectedIndex, setSelectedIndex] = useState();
    const [colorPickerPos, setColorPickerPos] = useState({x: 0, y: 0});
    const [displayPicker, setDisplayPicker] = useState(false);
    const colorPickerRef = useRef(null);
    const paletteRef = useRef([]);
    const paletteContainerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if((colorPickerRef.current && !colorPickerRef.current.contains(event.target)) && 
            (paletteContainerRef.current && !paletteContainerRef.current.contains(event.target))) {
                setDisplayPicker(false);
                setSelectedIndex(undefined);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [colorPickerRef]);

    useEffect(()=>{
        if(typeof selectedIndex !== 'undefined'){
            setDisplayPicker(true);
            let rect = paletteRef.current[selectedIndex].getBoundingClientRect();
            setColorPickerPos({x: rect['x'], y: rect['y']});
        }
    }, [selectedIndex])
    
    const newColor = () => {
        let paletteCopy = state.colorPalette;
        paletteCopy.push('#000000');
        setState(state => ({...state, colorPalette: paletteCopy}));
        setSelectedIndex(state.colorPalette.length-1);
        setDisplayPicker(true);
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
                        boxShadow: i===selectedIndex? '0px 0px 0px 2px rgba(255,255,255,1) inset': '0px 0px 0px 2px rgba(0, 0, 0, 0) inset'
                    }} 
                    onClick={()=>setSelectedIndex(i)} key={i}
                    ref={el => (paletteRef.current[i] = el)}
                >
                    <div className="color">
                        <div 
                            className="remove-color" 
                            onClick={()=>
                                setState(state=>({
                                    ...state, 
                                    colorPalette: state.colorPalette.filter(item => item !== color)
                                }))
                            }
                        ></div>
                    </div>
                </div>
            );
        }
        return null
    }

    return(
        <div>
            <div ref={paletteContainerRef} id={"palette"} className="color-search-container">
                <DisplayPalette/>
                <button className="button-large" onClick={newColor}>+</button>
            </div>
            
            {displayPicker ?
                <div ref={colorPickerRef} style={{ position: 'absolute', display: 'inline-block', 'left': colorPickerPos.x, 'top': colorPickerPos.y + 40}}>
                    <ChromePicker color={state.colorPalette[selectedIndex]} onChange={handleColorChange} disableAlpha={true}/>
                </div>
            :null
            }
        </div>
    )
}
import React, { useRef, useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';

// https://stackoverflow.com/questions/57810378/how-to-create-dynamic-refs-in-functional-component-using-useref-hook
// https://stackoverflow.com/questions/35153599/reactjs-get-height-of-an-element

export default function Color({state, setState}){
    const [showPicker, setShowPicker] = useState(false);
    const [currentColor, setCurrentColor] = useState();
    const [colorArray, setColorArray] = useState([]);
    const [selectedColorIndex, setSelectedColorIndex] = useState();
    const colorPickerRef = useRef(null);
    const palleteRef = useRef(null);
    const [mousePos, setMousePos] = useState({x: 0, y: 0});
    const colorRefs= useRef([]);

    useEffect(() => {
        function handleClickOutside(event) {
            if ((colorPickerRef.current && !colorPickerRef.current.contains(event.target)) && (palleteRef.current && !palleteRef.current.contains(event.target))) {
                setShowPicker(false);
                setSelectedColorIndex();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [colorPickerRef, palleteRef]);
    
    // useEffect(()=>{
    //     if(state.colorPalette !== undefined){
    //         return setColorArray(state.colorPalette);
    //     }
    // }, [state.colorPalette])

    function newColor(e){
        // setColorArray([...colorArray, '#FFFFFF'])
        // setCurrentColor('#FFFFFF');
        // setSelectedColorIndex(colorArray.length);
        // setShowPicker(true);
        // setMousePos({x: e.clientX-112.5, y: e.clientY+19})

        //setState(state => ({...state, colorPalette: [...colorPalette, '#FFFFFF']}));

    };

    function handleChange(color){
        //setState(state => ({...state, colorPalette: colorArray}));

        setCurrentColor(color.hex);
        colorArray[selectedColorIndex] = color.hex;
    };

    function adjustColor(index){
        setCurrentColor(colorArray[index]);
        setSelectedColorIndex(index);
        setShowPicker(true);
    }

    function ShowPallete() {
        if(state.length){
            return colorArray.map((color, i) =>
                <div 
                    id="swatch" 
                    style={{
                        backgroundColor: color, 
                        border: i===selectedColorIndex?'5px solid rgba(255,255,255,1)':'5px solid rgba(255,255,255,0)'
                    }} 
                    onClick={()=>adjustColor(i)} key={i}
                    ref={el => (colorRefs.current[i] = el)}
                >
                    <div className="color"></div>
                </div>
            );
        }
        return null
    }

    function removeAll(){
        setColorArray([]);
        setState(state => ({...state, colorPalette: []}));
    }
    
    return(
        <div>
            <h3>Color</h3>
            <div ref={palleteRef} id={"palette"} className="color-search-container">
                <ShowPallete />
                <button className="button-large" onClick={newColor}>+</button>
                <button className="button-large" onClick={()=>removeAll()}>REMOVE ALL</button>
                
            </div>

            {showPicker ?
                <div ref={colorPickerRef} style={{ position: 'absolute', display: 'inline-block', 'top': mousePos.y, 'left': mousePos.x }}>
                    <ChromePicker color={currentColor} onChange={handleChange} disableAlpha={true}/>
                </div>
                :null
            }
        </div>
    )
}


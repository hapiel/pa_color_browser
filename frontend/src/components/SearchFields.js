import React, {useEffect, useState} from 'react';

const useSlider = (min, max, defaultState, label, id) => {
    const [state, setSlide] = useState(defaultState);
    const handleChange = e => {
        setSlide(e.target.value);
    }
  
    const props = { 
      type: 'range',
      id,
      min,
      max,
      step: 1,
      value: state,
      onChange: handleChange
    }
    return props
}

export default function SearchFields({state, setState}){
    const [keywordValue, setKeywordValue] = useState("");
    const [authorValue, setAuthorValue] = useState("");
    const sliderProps = useSlider(0, 20, 4, "Threshold", 'threshold');

    const onKeyword = event => {
        setKeywordValue(event.target.value);
    };

    const onAuthor = event => {
        setAuthorValue(event.target.value);
    };

    useEffect(()=>{
        setState(state => ({...state, tolerance: sliderProps.value}));
    },[sliderProps.value])

    useEffect(()=>{
        setState(state => ({...state, keyword: keywordValue}));
    },[keywordValue])

    useEffect(()=>{
        setState(state => ({...state, author: authorValue}));
    },[authorValue])

    return(
        <div className="search-container">
            <div className="search-labels">
                <label htmlFor="searchAll">Color tolerance: </label>
                <label htmlFor="searchAll">Keyword: </label>
                <label htmlFor="author">Search author: </label>
            </div>
            <div className="search-inputs">
                <div>
                    <input {...sliderProps}/>
                    <label>{sliderProps.value}</label>
                </div>
                <input type="text" id="searchAll" name="searchAll" onChange={onKeyword} value={keywordValue}/>
                <input type="text" id="searchAll" name="searchAll" onChange={onAuthor} value={authorValue}/>
            </div>
            {/* <div className="search-element">
                <label for="title">Search title: </label>
                <input type="text" id="title" name="title" />
            </div>
            <div className="search-element"> 
                <label for="keyword">Search keyword: </label>
                <input type="text" id="keyword" name="keyword" />
            </div>   */}

        </div>     
    )
}
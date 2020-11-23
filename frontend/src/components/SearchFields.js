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
    const [activeFilters, setActiveFilters] = useState([]);
    const [inactiveFilters, setInactiveFilters] = useState(["Keyword", "Author", "Color count", "Size", "Date", "Animation", "Transparency" ])

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
        console.log(state)
        setState(state => ({...state, tolerance: sliderProps.value}));
    },[setState, sliderProps.value])

    useEffect(()=>{
        setState(state => ({...state, keyword: keywordValue}));
    },[setState, keywordValue])

    useEffect(()=>{
        setState(state => ({...state, author: authorValue}));
    },[setState, authorValue])


    function ActiveFilters(){
        return activeFilters.map(function(filter, index){
            // (["Keyword", "Author", "Color count", "Size", "Date", "Animation", "Transparency" ])
            switch(filter){
                case "Empty":
                    return <p>{filter}</p>
                case "Keyword":
                    return <p>{filter}</p>
                case "Author":
                    return <p>{filter}</p>
                case "Color count":
                    return <p>{filter}</p>
                case "Size":
                    return <p>{filter}</p>
                case "Date":
                    return <p>{filter}</p>
                case "Animation":
                    return <p>{filter}</p>
                case "Transparency":
                    return <p>{filter}</p>
                default:
                    return <p>NOTHING  I GUESS</p>
            }
        });
    }
    
    

    return(
        <div>
            <div className="search-container">
                <div className="search-labels">
                    <label htmlFor="tolerance">Color tolerance: </label>
                    <label htmlFor="keyword">Keyword: </label>
                    <label htmlFor="author">Search author: </label>
                </div>
                <div className="search-inputs">
                    <div>
                        <input {...sliderProps}/>
                        <label>{sliderProps.value}</label>
                    </div>
                    <input type="text" id="keyword" name="keyword" onChange={onKeyword} value={keywordValue}/>
                    <input type="text" id="author" name="author" onChange={onAuthor} value={authorValue}/>
                </div>
            
                <ActiveFilters/>
            </div> 
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import '../CSS/detailView.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useParams, Link } from 'react-router-dom';
import Api from '../util/Api';
import ValidationError from '../util/ValidationError';
import { ReactComponent as GoBackIcon } from '../icons/gobackicon.svg';
import { ReactComponent as LaunchIcon } from '../icons/launchicon.svg';

export default function DetailView({state, setState}){
    const [image, setImage] = useState();
    const [selectedColors, setSelectedColors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [copied, setCopied] = useState();
    const [swatch, setSwatch] = useState({});
    const [zoomWidth, setZoomWidth] = useState();
    let { id } = useParams();

    useEffect(()=>{
        getImage(id)
    },[id])

    function ShowDetail() {
        if (isLoading) {
            return <h3>Loading...</h3>
        } 
        return <Details/>
    }

    function selectColor(color, colorObj){
        if (selectedColors.includes(color)) {
            setSelectedColors(selectedColors.filter(function(e) { return e !== color; }))
        } else {
            setSelectedColors([...selectedColors, color]);
        }
        setSwatch(colorObj);
        setCopied("");
    }

    function mouseSwatch(colorObj){
        if (selectedColors.length === 0){
            setSwatch(colorObj);
            setCopied("");
        }
    }

    function selectAll(){
        const allColors = []
        for (let i = 0; i < image.colors.length; i++) {
            allColors.push(image.colors[i].hex);
        }
        setSelectedColors(allColors);
    }

    function deselectAll(){
        setSelectedColors([]);
    }

    function Palette(){
        const sortedData = [].concat(image.colors)
            .sort((a, b) => a.dbBrightness > b.dbBrightness ? 1 : -1);

        return sortedData.map((color, i) =>
            <div key={i} id={i} className={selectedColors.includes(color.hex) ? "color-tile select" : "color-tile deselect"} style={{backgroundColor: color.hex}} onClick={()=>selectColor(color.hex, color)} onMouseEnter={()=>mouseSwatch(color)}>
                <div className="hover-visible" >
                </div>
            </div>
        );
    }

    function PaletteBar(){
        return image.colors.map((color, i) =>
            <div key={i} id={i} className="palette-bar-item" style={{backgroundColor: color.hex, width: (color.percent) + "%"} } onClick={()=>selectColor(color.hex, color)} onMouseEnter={()=>mouseSwatch(color)}>
            </div>
        );
    }

    function ColorSwatch(){
        return <div className="color-swatch">
            <div className="color-example" style={{backgroundColor: swatch.hex}}></div>            
            <CopyToClipboard text={swatch.hex.toUpperCase()} onCopy={()=>copyText(swatch.hex.toUpperCase())}>
                <p>HEX: {swatch.hex.toUpperCase()} {copied}</p>
            </CopyToClipboard>  
            <p>R: {swatch.rgb[0]} G: {swatch.rgb[1]} B: {swatch.rgb[2]}</p>
            <p>Percentage used: {Math.round(swatch.percent * 100) / 100 }%</p>
            
        </div>
    }

    function updatePalette(){
        if(selectedColors.length){
            setState(state => ({...state, colorPalette: state.colorPalette.concat(selectedColors)}));
        }
    }

    function copyText(hex){
        setCopied(" copied!")
    }

    function Tags(){
        if (image.tags.length > 0){
            return(
                <p>Tags: 
                    {image.tags.map((tag, i) =>
                        <span key={i}>{tag}{i !== image.tags.length - 1 && ', ' }</span>
                    )}
                </p>
            )
        }else{
            return <p>No tags.</p>
        }
    }

    function Details(){
        const tagLinks = [];

        for (const [i, tag] of image.tags.entries()) {
            tagLinks.push(<span key={i}>{tag}</span>)
        }

        return(
            <div className="detail-view">
                <div className="detail-top-bar">
                    <div className="return-bar">
                        
                        <Link 
                            onClick={()=>updatePalette()}
                            to={{pathname:'/'}}
                            className="vertical-center"
                            >
                            <GoBackIcon/>return
                        </Link>
                    </div>
                    <div className="pj-bar">
                        <a href={"http://pixeljoint.com/pixelart/" + image.pjId + ".htm"}>Open on pixeljoint.com <LaunchIcon fill="black"/></a>
                    </div>
                </div>
                <div className="detail-container">
            
                    <div className="image-large">
                    <div className="zoom-detail">
                        zoom<br/>
                        <button type="button" onClick={()=>zoomOut(image.pjId)}>-</button>
                        <button type="button" onClick={()=>zoomIn(image.pjId)}>+</button>
                        
                        
                    </div> 
                    <img src={image.url} alt={image.title} id={image.pjId} width={zoomWidth} ></img>
                    </div>
                    <div className="image-metadata">
                    <div className="meta-text">
                        <h2>{image.title}</h2>
                        
                        <h3>Created by <span>{image.author}</span></h3>
                        <p>{image.desc}</p>
                        <Tags/>
                        <p>Number of colors: {image.trans? image.colorCount + 1: image.colorCount} <br></br>
                        {image.trans? "(" + String(image.colorCount) + " + transparency)" : <></>}
                        </p>
                        <p>Dimensions: {image.width} x {image.height}px</p>
                    </div>
                    <div className="palette-bar">
                        Sorted by percentage used: <br></br>
                        <PaletteBar/><br></br>
                        Sorted by brightness:
                    </div>
                    <div className="color-flex">
                        <div className="color-wrapper">
                        
                            <Palette/>
                        </div>
                        {Object.keys(swatch).length !== 0  ?<ColorSwatch/>: <></>}
                        
                    </div>
                        <button onClick={()=>alert("Sorry, this feature doesn't work yet :(")}>Search with selected colors</button>
                        <span className="select-all">
                            <button onClick={()=>selectAll()}>
                                select all
                            </button>
                            <button onClick={()=>deselectAll()}>
                                deselect all
                            </button>
                        </span>
                    </div>
                </div>
                <div className="related-art">
                    RELATED ARTWORKS GO HEREE
                </div>
            </div> 
        )
    }

    function zoomIn(id) {
        var img = document.getElementById(id);
        var width = img.clientWidth;
        setZoomWidth((width * 2) + "px");
        // img.style.width = (width * 2) + "px";
    }

    function zoomOut(id) {
        var img = document.getElementById(id);
        var width = img.clientWidth;
        if (width === img.naturalWidth) return false;
        setZoomWidth((width / 2) + "px");
        // img.style.width = (width / 2) + "px";
    }

    // main render
    return(
        <ShowDetail/>
    )

    function getImage(id){
        function validator(response){}

        function onSucces(response){
            setImage(response.data);
            setIsLoading(false);
            
        }

        function onFailure(){
            throw new ValidationError("Failed");
        }

        Api.get(`/api/${id}`, validator, onSucces, onFailure)
    }
}
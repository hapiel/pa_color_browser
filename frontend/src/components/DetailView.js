import React, { useEffect, useState } from 'react';
import '../CSS/detailView.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useParams } from 'react-router-dom';
import Api from '../util/Api';
import ValidationError from '../util/ValidationError';

export default function DetailView(){
    const [image, setImage] = useState();
    const [selectedColors, setSelectedColors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [copied, setCopied] = useState("");
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
  
    function selectColor(index){
        if (selectedColors.includes(index)) {
            setSelectedColors(selectedColors.filter(function(e) { return e !== index; }))
        } else {
            setSelectedColors([...selectedColors, index]);
        }
    }
    function selectAll(){
        const allIndexes = []
        for (let i = 0; i < image.colors.length; i++) {
            allIndexes.push(i);
        }
        setSelectedColors(allIndexes);
    }
    function deselectAll(){
        setSelectedColors([]);
    }

    function Palette(){
        return image.colors.map((color, i) =>
            <div key={i} id={i} className={selectedColors.includes(i) ? "color-tile select" : "color-tile deselect"} style={{backgroundColor: color.hex}}>         
                <div className="hover-visible" onClick={()=>selectColor(i)}>
                    <CopyToClipboard text={color.hex} onCopy={()=>copyText(color.hex)}>
                        <span className={(Math.round(color.percent)<10)? "add-space" : ""}>
                            {Math.round(color.percent)}% {color.hex} 
                        </span> 
                    </CopyToClipboard>
                </div>
            </div>
        );
    }
    function copyText(hex){
        setCopied(hex + " is copied to clipboard!")
    }
    function Tags(){
        return(
            <p>Tags: {image.tags.map((tag, i) =>
                    <> 
                        <a key={i} href='#'>{tag}</a>
                        {i < image.tags.length - 1 && <>, </>}
                    </>
                )}
            </p>
        )
    }
  
    function Details(){
        const tagLinks = [];

        for (const [i, tag] of image.tags.entries()) {
            tagLinks.push(<a key={i} href='#'>{tag}</a>)
        }
        return(
            <div className="detail-view">
                <div className ="return-bar">
                    <a href="../">return to search</a>
                </div>
                <div className="detail-container">
                    <div className="image-large">
                    <img src={image.url} alt={image.title} id={image.pjId} ></img>
                    <div className="zoom-detail">
                        <button type="button" onClick={()=>zoomOut(image.pjId)}>-</button>
                        <button type="button" onClick={()=>zoomIn(image.pjId)}>+</button>
                        <br/>
                        zoom
                    </div>
                    </div>
                    <div className="image-metadata">
                    <div className="meta-text">
                        <h2>{image.title}</h2>
                        <h3>Created by <a href="#">{image.author}</a></h3>
                        <p>{image.desc}</p>
                        <Tags/>
                    </div>
                    <div className="color-wrapper">
                        <Palette/>
                    </div>
                        
                        <button onClick={()=>alert("Sorry, this feature doesn't work yet :(")}>Search with selected colors</button>
                        
                        <span className="select-all">
                            <a href="#" onClick={()=>selectAll()}>select all</a>, <a href="#" onClick={()=>deselectAll()}>deselect all</a>
                        </span>
                        
                    </div>
                    
                </div>
                <div className="related-art">
                    RELATED ARTWORKS GO HERE
                </div>

                <div className="alert">
                    {copied}
                </div>
            </div> 
        )
    }

    function zoomIn(id) {
        var img = document.getElementById(id);
        var width = img.clientWidth;
        img.style.width = (width * 2) + "px";
    }

    function zoomOut(id) {
        var img = document.getElementById(id);
        var width = img.clientWidth;
        if (width === img.naturalWidth) return false;
        img.style.width = (width / 2) + "px";
    }

    // main render
    return(
        <ShowDetail/>
    )

    function getImage(id){
        function validator(response){

        }

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
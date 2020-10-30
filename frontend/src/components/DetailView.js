import React from 'react';

export default function SearchFields(){

  const image = {
    url: "http://pixeljoint.com/files/icons/knight_04.png",
    title: "This is a knight",
    pjId: 133903,
    author: "Hapiel"
  }

  return(
    <div className="detail-view">
      <div className ="return-bar">
        return to search
      </div>
      <div className="detail-container">
        <div className="image-large">
          <img src={image.url} alt={image.title} id={image.pjId} ></img>
          <div className="zoom-buttons">
              <button type="button" onClick={()=>zoomIn(pjId)}>+</button>
              <button type="button" onClick={()=>zoomOut(pjId)}>-</button>
          </div>
          <div className="image-metadata">
            <h2>{image.title}</h2>
            <h3>Created by {image.author}</h3>
            
          </div>
          
        </div>

      </div>
    </div>        
  )
}
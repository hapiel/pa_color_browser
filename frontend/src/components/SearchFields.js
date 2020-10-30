import React from 'react';

export default function SearchFields(){
    return(
        <div className="top-bar">
            <form className="search-container">
                <div className="search-element">
                    <label for="title">Search title: </label>
                    <input type="text" id="title" name="title" />
                </div> 
                <div className="search-element">
                    <label for="author">Search author: </label>
                    <input type="text" id="author" name="author" />
                </div>
                <div className="search-element"> 
                    <label for="keyword">Search keyword: </label>
                    <input type="text" id="keyword" name="keyword" />
                </div>
                <div className="search-element">
                    <label for="searchAll">Search any field (also description): </label>
                    <input type="text" id="searchAll" name="searchAll" />
                </div>
            </form>
        </div>        
    )
}
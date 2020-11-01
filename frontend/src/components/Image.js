import React, { useEffect, useState } from 'react';

export default function Image({image, i}){

    const gridCell = 128;
    //if images are only a tiny bit too large, they will still be cropped
    const minOvershoot = 20;
    const gridGap = 10;

    let classes="art-grid";
    let w = gridCell
    let h = gridCell
    if (image.width > gridCell + minOvershoot){
        classes += " grid-w2";
        w = w * 2 + gridGap;
    }
    if (image.height > gridCell + minOvershoot){
        classes += " grid-h2";
        h = h * 2 + gridGap;
    }

    return(
        <div key={i} className={classes}>
            <a href={"/detail/"+ image.pjId}>
            {/* Scale small images 2x, tiny images 3x */}
            {image.width <= gridCell/2 && image.height <= gridCell/2
                ? image.width <= gridCell/3 && image.height <= gridCell/3
                    ?<span><span className="helper"></span><img src={image.url} alt={image.title} id={i} width={image.width * 3} height={image.height * 3}></img></span>
                    :<span><span className="helper"></span><img src={image.url} alt={image.title} id={i} width={image.width * 2} height={image.height * 2}></img></span>
                : <img src={image.url} alt={image.title} id={i} className="fit" width={w} height={h}></img>
            }
            </a>

        </div> 
    )
}


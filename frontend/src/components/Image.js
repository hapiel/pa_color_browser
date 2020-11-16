import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as LaunchIcon } from '../icons/launchicon.svg';

export default function Image({image, i, colorPalette}){
    const gridCell = 128;
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
            <Link to={{pathname:`/detail/${image.pjId}`, colorPalette: colorPalette}}>
            {/* Scale small images 2x, tiny images 3x */}
            {image.width <= gridCell/2 && image.height <= gridCell/2
                ? image.width <= gridCell/3 && image.height <= gridCell/3
                    ?<span><span className="helper"></span><img src={image.url} alt={image.title} id={i} width={image.width * 3} height={image.height * 3}></img></span>
                    :<span><span className="helper"></span><img src={image.url} alt={image.title} id={i} width={image.width * 2} height={image.height * 2}></img></span>
                : <img src={image.url} alt={image.title} id={i} className="fit" width={w} height={h}></img>
            }
            
            <div className="overlay"></div>
            <div className="color-count">
                {image.trans? image.colorCount + 1: image.colorCount} Colors
            </div>
            <div className="launch">
                <LaunchIcon></LaunchIcon>
            </div>
            <div className="preview">
                {image.title}<br/>
                by {image.author}
            </div>
            </Link>
        </div> 
    )
}


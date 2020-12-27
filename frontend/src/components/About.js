import React from 'react';
import { ReactComponent as GoBackIcon } from '../icons/gobackicon.svg';
import '../CSS/about.scss';
import { Link } from 'react-router-dom';

export default function About(){

    return(
        <div className="detail-view">
            <div className="detail-top-bar">
                <div className="return-bar">
                    <Link 
                        to={{pathname:'/'}}
                        className="vertical-center"
                        >
                        <GoBackIcon/>return
                    </Link>
                </div>

            </div>
            <div className="about-body">
                <h1>About</h1>
                <p>In the pixel art color browsing app you can find works from pixeljoint.com, but only works that were published before October 14th 2020.</p>

                <p>If the artwork is an animation, color count and palette are analysed on the first frame. </p>

                <p>This site was created by <a href="http://pixeljoint.com/p/9092.htm">Hapiel</a> and <a href="https://nl.linkedin.com/in/marinus-van-den-oever-0aa46117a">Marinus</a> as a research project in HCI, you can read the paper about it here.</p>

                <p>The <a href="https://github.com/hapiel/pa_color_browser/">source code for this website</a> and the <a href="https://github.com/hapiel/pa_color_db">source code for building the database</a> are both on github.</p>

                <h1>Database statistics</h1>

                <p>The database holds 88620 works, which we've analyzed with our script. Although the intended use of the database is to search individual works using color search, we also plotted some charts of the data.</p>
            
                <iframe style={{background: "#3A3A3C", border: "0" }} width={"100%"} height="480" src="https://charts.mongodb.com/charts-angelayu-ulbzk/embed/charts?id=d0f81586-c3ef-4b81-9576-188c11ea9b14&theme=dark"></iframe>
                <iframe style={{background: "#3A3A3C", border: "0" }} width={"100%"} height="480" src="https://charts.mongodb.com/charts-angelayu-ulbzk/embed/charts?id=9a2b5109-471a-4632-985f-3c42fee2c115&theme=dark"></iframe>
                <iframe style={{background: "#3A3A3C", border: "0" }} width={"100%"} height="480" src="https://charts.mongodb.com/charts-angelayu-ulbzk/embed/charts?id=8b24e4d7-06b1-479c-9b2e-73b73b80b369&theme=dark"></iframe>
                <iframe style={{background: "#3A3A3C", border: "0" }} width={"100%"} height="480" src="https://charts.mongodb.com/charts-angelayu-ulbzk/embed/charts?id=0a07834b-a5b5-45e9-9f4c-ec326a2d7115&theme=dark"></iframe>
                <iframe style={{background: "#3A3A3C", border: "0" }} width={"100%"} height="480" src="https://charts.mongodb.com/charts-angelayu-ulbzk/embed/charts?id=72bd9f30-a1c5-4371-b9d2-4bfb1cabf0c9&theme=dark"></iframe>
                <iframe style={{background: "#3A3A3C", border: "0" }} width={"100%"} height="480" src="https://charts.mongodb.com/charts-angelayu-ulbzk/embed/charts?id=ff838c60-c23a-4406-8643-4aeb322802b2&theme=dark"></iframe>
                <iframe style={{background: "#3A3A3C", border: "0" }} width={"100%"} height="480" src="https://charts.mongodb.com/charts-angelayu-ulbzk/embed/charts?id=3e716ce9-de3e-479b-b208-21b0d1b2722a&theme=dark"></iframe>

            </div>
        </div> 
    )
}
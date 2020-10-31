import React, { useState } from 'react';
import '../CSS/detailView.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';


export default function DetailView(){

  const [selectedColors, setSelectedColors] = useState([]); 
  
  function selectColor(index){
    if (selectedColors.includes(index)) {
      setSelectedColors(selectedColors.filter(function(e) { return e !== index; }))
    } else {
      selectedColors.push(index);
    }
    console.log(selectedColors);
  }

  const image = {
    url: "http://pixeljoint.com/files/icons/knight_04.png",
    title: "This is a knight",
    pjId: 133903,
    author: "Hapiel",
    desc: "Hello, this could be multi lines I suppose. Filler text is what I write, Lorem Ipsum bullshit yadda yadda do you like this? Ugh, I can't be bothered to write more. Do breaks work in here, like linebreaks? \n test \n test \n test, did that work? Who knows. Ok byeee EDIT: No I wrote \\n in the text and that didn't do anything... Help?",
    tags: ["snake", "monster", "sword"],
    colors: 
      [
        {
            "rgb" : [ 
                233, 
                43, 
                43
            ],
            "hex" : "#e92b2b",
            "percent" : 30.6238185255198,
            "dbBrightness" : 102.840119133524,
            "hsv" : [ 
                0.0, 
                81.5450643776824, 
                91.3725490196078
            ]
        },
        {
            "rgb" : [ 
                64, 
                12, 
                12
            ],
            "hex" : "#400c0c",
            "percent" : 13.7996219281664,
            "dbBrightness" : 28.3141969146698,
            "hsv" : [ 
                0.0, 
                81.25, 
                25.0980392156863
            ]
        },
        {
            "rgb" : [ 
                38, 
                43, 
                120
            ],
            "hex" : "#262b78",
            "percent" : 12.8544423440454,
            "dbBrightness" : 53.8241410385952,
            "hsv" : [ 
                236.341463414634, 
                68.3333333333333, 
                47.0588235294118
            ]
        },
        {
            "rgb" : [ 
                9, 
                10, 
                28
            ],
            "hex" : "#090a1c",
            "percent" : 12.6654064272212,
            "dbBrightness" : 12.554950610618,
            "hsv" : [ 
                236.842105263158, 
                67.8571428571429, 
                10.9803921568627
            ]
        },
        {
            "rgb" : [ 
                151, 
                28, 
                28
            ],
            "hex" : "#971c1c",
            "percent" : 11.531190926276,
            "dbBrightness" : 66.6939259877781,
            "hsv" : [ 
                0.0, 
                81.4569536423841, 
                59.2156862745098
            ]
        },
        {
            "rgb" : [ 
                207, 
                38, 
                38
            ],
            "hex" : "#cf2626",
            "percent" : 3.96975425330813,
            "dbBrightness" : 91.2942499765397,
            "hsv" : [ 
                0.0, 
                81.6425120772947, 
                81.1764705882353
            ]
        },
        {
            "rgb" : [ 
                68, 
                12, 
                12
            ],
            "hex" : "#440c0c",
            "percent" : 2.83553875236295,
            "dbBrightness" : 29.8255555135818,
            "hsv" : [ 
                0.0, 
                82.3529411764706, 
                26.6666666666667
            ]
        },
        {
            "rgb" : [ 
                23, 
                26, 
                72
            ],
            "hex" : "#171a48",
            "percent" : 2.07939508506616,
            "dbBrightness" : 32.4372211146177,
            "hsv" : [ 
                236.326530612245, 
                68.0555555555555, 
                28.2352941176471
            ]
        },
        {
            "rgb" : [ 
                60, 
                11, 
                11
            ],
            "hex" : "#3c0b0b",
            "percent" : 1.51228733459357,
            "dbBrightness" : 26.4570757773852,
            "hsv" : [ 
                0.0, 
                81.6666666666667, 
                23.5294117647059
            ]
        },
        {
            "rgb" : [ 
                56, 
                63, 
                177
            ],
            "hex" : "#383fb1",
            "percent" : 1.32325141776938,
            "dbBrightness" : 79.1323113410586,
            "hsv" : [ 
                236.528925619835, 
                68.361581920904, 
                69.4117647058823
            ]
        },
        {
            "rgb" : [ 
                62, 
                12, 
                12
            ],
            "hex" : "#3e0c0c",
            "percent" : 1.32325141776938,
            "dbBrightness" : 27.563667849679,
            "hsv" : [ 
                0.0, 
                80.6451612903226, 
                24.3137254901961
            ]
        },
        {
            "rgb" : [ 
                244, 
                244, 
                244
            ],
            "hex" : "#f4f4f4",
            "percent" : 1.13421550094518,
            "dbBrightness" : 244.0,
            "hsv" : [ 
                0.0, 
                0.0, 
                95.6862745098039
            ]
        },
        {
            "rgb" : [ 
                201, 
                201, 
                201
            ],
            "hex" : "#c9c9c9",
            "percent" : 0.945179584120983,
            "dbBrightness" : 201,
            "hsv" : [ 
                0.0, 
                0.0, 
                78.8235294117647
            ]
        },
        {
            "rgb" : [ 
                224, 
                224, 
                224
            ],
            "hex" : "#e0e0e0",
            "percent" : 0.945179584120983,
            "dbBrightness" : 224.0,
            "hsv" : [ 
                0.0, 
                0.0, 
                87.843137254902
            ]
        },
        {
            "rgb" : [ 
                29, 
                33, 
                91
            ],
            "hex" : "#1d215b",
            "percent" : 0.756143667296786,
            "dbBrightness" : 41.0718708136354,
            "hsv" : [ 
                236.129032258065, 
                68.1318681318681, 
                35.6862745098039
            ]
        },
        {
            "rgb" : [ 
                49, 
                55, 
                153
            ],
            "hex" : "#313799",
            "percent" : 0.378071833648393,
            "dbBrightness" : 68.794841246828,
            "hsv" : [ 
                236.538461538462, 
                67.9738562091503, 
                60.0
            ]
        },
        {
            "rgb" : [ 
                155, 
                155, 
                155
            ],
            "hex" : "#9b9b9b",
            "percent" : 0.378071833648393,
            "dbBrightness" : 155,
            "hsv" : [ 
                0.0, 
                0.0, 
                60.7843137254902
            ]
        },
        {
            "rgb" : [ 
                159, 
                29, 
                29
            ],
            "hex" : "#9f1d1d",
            "percent" : 0.189035916824197,
            "dbBrightness" : 70.0593790495707,
            "hsv" : [ 
                0.0, 
                81.7610062893082, 
                62.3529411764706
            ]
        },
        {
            "rgb" : [ 
                107, 
                20, 
                20
            ],
            "hex" : "#6b1414",
            "percent" : 0.189035916824197,
            "dbBrightness" : 47.3157469704718,
            "hsv" : [ 
                0.0, 
                81.3084112149533, 
                41.9607843137255
            ]
        },
        {
            "rgb" : [ 
                65, 
                60, 
                23
            ],
            "hex" : "#413c17",
            "percent" : 0.189035916824197,
            "dbBrightness" : 58.5754677821575,
            "hsv" : [ 
                52.8571428571429, 
                64.6153846153846, 
                25.4901960784314
            ]
        },
        {
            "rgb" : [ 
                98, 
                18, 
                18
            ],
            "hex" : "#621212",
            "percent" : 0.189035916824197,
            "dbBrightness" : 43.2247854568902,
            "hsv" : [ 
                0.0, 
                81.6326530612245, 
                38.4313725490196
            ]
        },
        {
            "rgb" : [ 
                95, 
                18, 
                18
            ],
            "hex" : "#5f1212",
            "percent" : 0.189035916824197,
            "dbBrightness" : 42.0954227727264,
            "hsv" : [ 
                0.0, 
                81.0526315789474, 
                37.2549019607843
            ]
        }
    ]
  }
  const tagLinks = [];
  for (const [i, tag] of image.tags.entries()) {
    tagLinks.push(<a key={i} href='#'>{tag}</a>)
  }


  const colorDivs = [];

  for (const [i, col] of image.colors.entries()) {
    colorDivs.push(
      <div key={i} id={i} className="color-tile" style={{backgroundColor: col.hex}}>
        
        <div className="hover-visible">
          <CopyToClipboard text={col.hex} onCopy={()=>selectColor(i)}>
            <span>
              {/* How can we make this a space instead of a 0? */}
              {(Math.round(col.percent)<10)? "0" : ""}
              {Math.round(col.percent)}% {col.hex} 
            </span> 
          </CopyToClipboard>
          
        </div>
        
      </div>
    )
  }
  

  return(
    <div className="detail-view">
      <div className ="return-bar">
        return to search
      </div>
      <div className="detail-container">
        <div className="image-large">
          <img src={image.url} alt={image.title} id={image.pjId} ></img>
          <div className="zoom-detail">
              <button type="button" onClick={()=>zoomIn(image.pjId)}>+</button>
              <button type="button" onClick={()=>zoomOut(image.pjId)}>-</button>
              <br/>
              zoom
          </div>
        </div>
        <div className="image-metadata">
          <div className="meta-text">
            <h2>{image.title}</h2>
            <h3>Created by <a href="#">{image.author}</a></h3>
            <p>{image.desc}</p>
            <p>Tags: {tagLinks.map((tag, i) => [i > 0 && ", ", tag])}</p>
          </div>
          <div className="color-wrapper">{colorDivs}</div>
        
          <button>Search with selected colors</button>
          <span className="select-all"><a href="#">select all</a></span>
        </div>
      </div>
      <div className="related-art">
        RELATED ARTWORKS GO HERE
      </div>
    </div>        
  )

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

  function textCopied(i){
    //ok this needs to be improved
    // document.getElementById(i).firstElementChild.innerHTML = "Hex copied";
  }



}
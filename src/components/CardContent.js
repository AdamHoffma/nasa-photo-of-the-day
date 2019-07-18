import axios from "axios"
import React, { useEffect, useState } from "react";
import ImageElement from "./ImgEle.js"
import TitleElement from "./TitleEle.js"
import DateElement from "./DateEle.js"
import ExplanationElement from "./ExplanationEle.js"
import LogoElement from "./logo.js"
import HeaderElement from "./Header.js"

function CardContent(){
    const [nasa, setNasa] = useState([]);
    useEffect(() => {
    
    
    axios.get('https://api.nasa.gov/planetary/apod?api_key=wWyCmewv90fyLT1KV68qUwsHJlUNiZ5ghWvIOEc5')
    .then(returning => {      
      const photo = returning.data
      setNasa(photo)
      console.log(returning)
      const title = returning.data
      setNasa(title)
      const date = returning.data
      setNasa(date)
      const explanation = returning.data
      setNasa(explanation)
      })
      .catch(error => {
        console.log("Down", error)
      })
    
    },[])
    return (
      <div>
        <LogoElement/>
        <HeaderElement/>
        <TitleElement headline={nasa.title}/>
        <DateElement date={nasa.date}/>
        <ImageElement url={nasa.url}/>
        <ExplanationElement info={nasa.explanation}/>
        
      </div>
    )
    }

    export default CardContent
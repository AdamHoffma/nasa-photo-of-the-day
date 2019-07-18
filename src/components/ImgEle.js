import React from "react";
import CardContent from "./Img.js"
import { tsPropertySignature } from "@babel/types";

export default function ImageElement(props) {
    return (
        <div className = "imagecontainer">0"
            <iframe width="600" height="400" src={props.url}></iframe>
        </div>
    )
}
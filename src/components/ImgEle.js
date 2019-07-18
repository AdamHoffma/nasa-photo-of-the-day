import React from "react";
import { Image } from 'semantic-ui-react';



export default function ImageElement(props) {
    return (
        <div className = "imagecontainer">
            <Image width="600" height="400" src={props.url} size='huge' rounded centered/>            
        </div>
    )
}





import React from "react";
import { Header, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Title } from "./Styles.js"

export default function TitleElement(props) {
    return (
    <Segment style={{backgroundColor: 'black'}}>
        
        <Title style={{color: 'yellow'}} className="title" as='h3' textAlign='justified'>
        {props.headline}
        </Title>
    </Segment>
    )
}





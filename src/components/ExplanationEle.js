import React from "react"
import {Segment} from "semantic-ui-react"

export default function ExplanationElement(props) {
    return (
    <Segment size="big" raised>Explanation: <br/>{props.info}</Segment>
    )
}
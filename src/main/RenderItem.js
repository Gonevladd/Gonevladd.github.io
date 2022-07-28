import React from "react";
import {Image} from "react-bootstrap";
import style from "./style.css"

export default function RenderItem(param){

    return(
        <>
            <h1>{param.label}</h1>
            <Image src={param.imgSrc} id="img_item"></Image>
        </>
    )
}
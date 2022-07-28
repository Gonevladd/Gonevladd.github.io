import React from "react";
import {Image, Button, Card} from "react-bootstrap";
import style from "./style.css"
import MainColor from "./MainColor";

export default function RenderItem(param){

    return(
        <>
            <Card style={{ width: '18rem' }} id="img_item">
                <Card.Img variant="top" src={param.imgSrc} />
                <Card.Body>
                    <Card.Title>{param.label}</Card.Title>
                    <Card.Text>
                        Actors: {param.actors+'\n'} <br/>
                        {/*Year: {param.year+'\n'} <br/>*/}
                        Type: {param.type+'\n'} <br/>
                        {/*Rank: {param.rank+'\n'} <br/>*/}
                    </Card.Text>
                    <Button variant={MainColor.getColor()}>Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}
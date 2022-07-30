import React from "react";
import {useState} from "react";
import {Image, Button, Card} from "react-bootstrap";
import {Route, Link, Routes} from "react-router-dom";
import style from "./style.css"
import MainColor from "./MainColor";
import FullInfoPage from "./FullInfoPage";

export default function RenderItem(param){
    const [checkFullPage, setCheckFullPage] = useState(false);

    let log = () => {
        // return <Route exact path="/FullPage" component={FullInfoPage}></Route>
        setCheckFullPage(true);
        console.log(checkFullPage);
    }

    return(
        <>
            <Card style={{ width: '18rem' }} id="img_item">
                <Card.Img variant="top" src={param.imgSrc} />
                <Card.Body>
                    <Card.Title>{param.label}</Card.Title>
                    <Card.Text>
                        Actors: {param.actors+'\n'} <br/>
                        Type: {param.type+'\n'} <br/>
                    </Card.Text>
                    <Link to={`/Movies/${param.label}`} state={{from: param}} id="open_btn">
                        <Button variant={MainColor.getColor()} onClick={log}>
                            Open
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}
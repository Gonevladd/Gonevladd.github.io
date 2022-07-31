import React from "react";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import {Button, Image, Carousel, Card, Row} from "react-bootstrap";
import Header from "./Header";
import style from "./style.css"
import MainColor from "./MainColor";

export default function FullInfoPage(param){

    const location = useLocation();
    const {from} = location.state;

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return(
        <>
            <div className="background">
                <div className="poster_header">
                    <Header></Header>
                    <Image src={from.imgSrc} id="poster"></Image>
                    <h1 id="poster_label">{from.label}</h1>
                </div>

                <div className="description">
                    <h1 id="poster_description">Description</h1>

                    <Row>
                        <Row>
                            <Card style={{ width: '18rem' }} className="descriptio_item">
                                <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/409/409820.png" />
                                <Card.Body>
                                    <Card.Title>Actors</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>


                        <Row>
                            <Card style={{ width: '18rem' }} className="descriptio_item">
                                <Card.Img variant="top" src="https://static.thenounproject.com/png/2080614-200.png" />
                                <Card.Body>
                                    <Card.Title>Year</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>


                        <Row>
                            <Card style={{ width: '18rem' }} className="descriptio_item">
                                <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/2282/2282510.png" />
                                <Card.Body>
                                    <Card.Title>Rank</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>


                        <Row>
                            <Card style={{ width: '18rem' }} className="descriptio_item">
                                <Card.Img variant="top" src="https://i.pinimg.com/originals/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg" />
                                <Card.Body>
                                    <Card.Title>Type</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>

                    </Row>


                    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel_item">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={from.data.v[0].i.imageUrl}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={from.data.v[1].i.imageUrl}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={from.data.v[2].i.imageUrl}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>


            </div>
        </>
    );
}
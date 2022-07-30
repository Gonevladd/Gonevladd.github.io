import React from "react";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import {Button, Image, Carousel, CarouselItem} from "react-bootstrap";
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
            <Header></Header>
            <h1>{from.label}</h1>
        <Carousel activeIndex={index} onSelect={handleSelect} className="carousel_item">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={from.imgSrc}
                    alt="First slide"
                />
                <Carousel.Caption>
                    {/*<h3>{from.label}</h3>*/}
                    {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            </>
    );
}
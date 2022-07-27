import React from "react";
import {Component} from "react";
import {InputGroup, Form, Button, Image} from "react-bootstrap";
import myStyle from './style.css'
import axios from "axios";








let searchValue;


export default class Search extends Component{


    constructor() {
        super();
        this.state = {
            result: "Not yet",
            imageUrl: "Not yet",
        };
        this.handleSearchButton = this.handleSearchButton.bind(this);
    }

    handleSearchInput(event){
        searchValue = event.target.value;
    }


    handleSearchButton(event){
        console.log(searchValue);


        // axios.post('http://localhost:4000/test', {searchValue})
        //     .then(res => console.log(res))


        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: {q: searchValue},
            headers: {
                'X-RapidAPI-Key': '1fbaf14680msha48a07979f8cfa2p14282ejsn2a81c585dd16',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        };

        axios.request(options).then((response) =>{
            console.log(response.data);

            console.log(this.state.result);

            this.setState( () => ({result: response.data.d[0].l, imageUrl: response.data.d[0].i.imageUrl}));

        }).catch(function (error) {
            console.error(error);
        });
    }


    render() {
        return(
            <>
                <InputGroup className="mb-3" id="search-form">
                    <Form.Control
                        placeholder="Enter movie or series"
                        aria-label="Enter movie or series"
                        aria-describedby="basic-addon2"
                        id="search-input"
                        onChange={this.handleSearchInput}
                    />
                    <Button variant="outline-success" id="button-addon2" onClick={this.handleSearchButton}>
                        Find!
                    </Button>
                </InputGroup>


                <h1>{this.state.result === "Not yet" ? null : this.state.result}</h1>
                <Image src={this.state.imageUrl}></Image>
            </>
        );
    }


}
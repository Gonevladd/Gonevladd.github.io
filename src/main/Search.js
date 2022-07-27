import React from "react";
import {InputGroup, Form, Button} from "react-bootstrap";
import myStyle from './style.css'
import axios from "axios";


let searchValue;

function handleSearchInput(event){
    searchValue = event.target.value;
}

function handleSearchButton(event){
    console.log(searchValue);
    connectToBackend();
}

function connectToBackend(){
    axios.post('http://localhost:4000/test', {searchValue})
        .then(res => console.log(res))
}


export default function Search(){


    return(
        <InputGroup className="mb-3" id="search-form">
            <Form.Control
                placeholder="Enter movie or series"
                aria-label="Enter movie or series"
                aria-describedby="basic-addon2"
                id="search-input"
                onChange={handleSearchInput}
            />
            <Button variant="outline-success" id="button-addon2" onClick={handleSearchButton}>
                Find!
            </Button>
        </InputGroup>
    );
}
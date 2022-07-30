import React from "react";
import {Component} from "react";
import {InputGroup, Form, Button, Image, Row} from "react-bootstrap";
import myStyle from './style.css'
import axios from "axios";
import RenderItem from "./RenderItem";
import mainColor from "./MainColor";
import PreviouslySearch from "./PreviouslySearch";



let searchValue;


export default class Search extends Component{


    constructor() {
        super();
        this.state = {
            result: "Not yet",
            imageUrl: "Not yet",
        };

        // this.checkPrevious = false;

        this.handleSearchButton = this.handleSearchButton.bind(this);


        // if (PreviouslySearch.getSearchResult() !== null) {
        //     this.checkPrevious = true;
        //     this.handleSearchButton();
        // }
    }



    handleSearchInput(event){
        searchValue = event.target.value;
        // this.checkPrevious = false;
    }


    handleSearchButton(){
        console.log(searchValue);

        // if(this.checkPrevious){
        //     searchValue = PreviouslySearch.getSearchResult().q;
            // PreviouslySearch.setSearchResult(null);
            // document.getElementById('button-addon2').click();
        // }


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

        axios.request(options).then((response) => {
            // console.log(response.data);

            // console.log(this.state.result);

            this.setState(() => ({result: response.data.d, imageUrl: response.data.d}));
            PreviouslySearch.setSearchResult(response.data);

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
                    <Button variant={"outline-"+mainColor.getColor()} id="button-addon2" onClick={this.handleSearchButton}>
                        Find!
                    </Button>
                </InputGroup>


                <Row xs={1} md={1} className="g-4">
                            {
                                this.state.result !== "Not yet" ? this.state.result.map((value, index) => {
                                    try {
                                        // console.log(value.i.imageUrl);
                                        return <RenderItem label={value.l} imgSrc={value.i.imageUrl} actors={value.s} year={value.y} rank={value.rank} type={value.q}/>
                                    }catch (e) {
                                        console.log(e);
                                    }

                                }) : null
                            }
                </Row>
            </>
        );
    }


}
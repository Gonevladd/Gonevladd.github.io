import React from "react";
import {Button} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";
import MainColor from "./MainColor";
import mainColor from "./MainColor";
import Search from "./Search";
import axios from "axios";
import PreviouslySearch from "./PreviouslySearch";


export default function Header(){

    let searchValue;

    let chooseColor = event => {
        MainColor.setColor(event.target.innerText);
    }

    let handleSearchInput = event =>{
        searchValue = event.target.value;
    }

    let handleSearchButton = event => {
        console.log(searchValue);

        // this.setState(() => ({showLoading: "Yes"}));

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

            console.log(response.data);
            if(response.data.symbol === null){
                console.log('Bad data');
                return;
            }

        }).catch(function (error) {
            console.error(error);
        });
    }

    return(
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/"><div className={mainColor.getColor()}>MOVIE RATE</div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Theme" id="navbarScrollingDropdown">
                                <NavDropdown.Item onClick={chooseColor}>Primary</NavDropdown.Item>
                                <NavDropdown.Item onClick={chooseColor}>Secondary</NavDropdown.Item>
                                <NavDropdown.Item onClick={chooseColor}>Success</NavDropdown.Item>
                                <NavDropdown.Item onClick={chooseColor}>Danger</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={chooseColor}>Warning</NavDropdown.Item>
                                <NavDropdown.Item onClick={chooseColor}>Info</NavDropdown.Item>
                                <NavDropdown.Item onClick={chooseColor}>Light</NavDropdown.Item>
                                <NavDropdown.Item onClick={chooseColor}>Dark</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleSearchInput}
                        />
                        <Button variant={'outline-'+MainColor.getColor()} onClick={handleSearchButton}>Find!</Button>
                    </Form>
                </Container>
            </Navbar>
    );
}
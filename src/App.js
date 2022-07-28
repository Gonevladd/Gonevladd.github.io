
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./main/Header";
import Search from "./main/Search";
import {useState, Component} from "react";
import {Button} from "react-bootstrap";
import MainColor from "./main/MainColor";
import style from "./main/style.css"

class App extends Component{



    refresh = () => {
        this.setState({});
    }

    render() {
        return (
            <>
                <Header></Header>
                <Search></Search>
                <Button onClick={this.refresh} variant={MainColor.getColor()} id="apply_btn">Apply</Button>
            </>
        );
    }
}

export default App;

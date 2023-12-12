import React, { Component } from "react";
import CardList from "../components/CardList";
//import { Frnds } from "../components/Frnds";
import SearchBox from "../components/SearchBox";
import "./App.css"
import Scroll from "../components/Scroll";

class App extends Component {

    constructor() {
        super();
        this.state = {
            Frnds: [],
            searchField: "",
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(users => this.setState({ Frnds: users }))
    }

    onSearchChange = (event) => {
        this.setState ({
            searchField: event.target.value
        })
    }

    render() {
        const filteredFrnds = this.state.Frnds.filter((Frnd => {
            return Frnd.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        }))
        
        if(this.state.Frnds.length === 0){
            return <h1 className="f1 tc ma7 pa7">LOADING</h1>
        }
        else{
            return (
                <div className="tc">
                    <h1> My Robo Friends</h1>
                    <SearchBox searchChange = { this.onSearchChange }/>
                    <Scroll>
                        <CardList Frnds={ filteredFrnds } />
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;
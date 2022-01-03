import React, {Component} from "react";

import {Switch, Route, Redirect} from "react-router-dom";
import jwtDecode from "jwt-decode";
// import Logout from "./components/Logout/logout";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import Home from "./components/Home/home";
import Profile from "./components/Profile/profile";
import TradeHall from "./components/TradeHall/tradeHall";
import ArmyForge from "./components/ArmyForge/armyForge";
import ModelResearch from "./components/ModelResearch/modelResearch";
import "./App.css";
import "bootstrap";

class App extends Component {
    constructor(props){
        super(props);
        const jwt = localStorage.getItem("token");
        try{
            const decodedUser = jwtDecode(jwt);
            this.state = {
                user: decodedUser,
            }
        } catch {
            this.state = {
                user: null,
            }
        }
    }

    componentDidMount(){
        ///JWT may be set other than null
        const jwt = localStorage.getItem("token");
        try {
            const decodedUser = jwtDecode(jwt);
            this.setState({user: decodedUser});
        } catch {

        }
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" exact render={(props) => {
                        if(!this.state.user){
                            return <Redirect to="/login" />
                        } else {
                            return <Home {...props} />
                        }
                    }}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/tradeHall" component={TradeHall} />
                    <Route exact path="/armyForge" component={ArmyForge} />
                    <Route exact path="/modelResearch" component={ModelResearch} />
                </Switch>
            </div>
        )
    }
}

export default App;
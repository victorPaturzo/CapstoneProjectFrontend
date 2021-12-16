import React, {Component} from "react";

import {Switch, Route, Redirect} from "react-router-dom";
import jwtDecode from "jwt-decode";

class App extends component {
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
            const decodedUser = jwtDecode("jwt");
            this.setState({user: decodedUser});
        } catch {

        }
    }

    render() {
        return (
            <div className="App">
                <Logout />
                <Switch>
                    <Route path="/" exact render={(props) => {
                        if(!this.state.user){
                            return <Redirect to="/login" />
                        } else {
                            return <Home {...props} />
                        }
                    }}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        )
    }
}

export default App;
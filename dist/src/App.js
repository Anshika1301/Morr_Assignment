import React from "react";
import "./components/FontawesomeIcons";

// import "./App.css";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";


function App()
{
    return(
        <>
            <Router>
                <Header/>
                <Footer/>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/series' component={Series}></Route>
                    <Route exact path='/movies' component={Movies}></Route>
                    <Route component={ErrorPage}></Route>
                </Switch>
            </Router>           
        </>
    );
} 

export default App;
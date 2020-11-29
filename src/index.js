import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TestComponent from "./components/TestComponent";
import {SearchResultComponent} from "./components/SearchResultComponent";
import {HomeComponent} from "./components/HomeComponent";
import {AboutComponent} from "./components/AboutComponent";
import {PolicyComponent} from "./components/PolicyComponent";
import {SearchComponent} from "./components/SearchComponent";
import {BrowserRouter, Route} from "react-router-dom";
import {DetailComponent} from "./components/DetailComponent";
import WikiComponent from "./components/WikiComponent";

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" exact>
            <WikiComponent/>
        </Route>
        <Route path="/search/:recipeId" component={DetailComponent} exact/>
        {/*<Route path="/" exact>*/}
        {/*    <HomeComponent />*/}
        {/*</Route>*/}
        {/*<Route path="/search" exact>*/}
        {/*    <SearchComponent />*/}
        {/*</Route>*/}
        {/*<Route path="/detail" exact>*/}
        {/*    <DetailComponent />*/}
        {/*</Route>*/}
        {/*<Route path="/about" exact>*/}
        {/*    <AboutComponent />*/}
        {/*</Route>*/}
        {/*<Route path="/policy" exact>*/}
        {/*    <PolicyComponent />*/}
        {/*</Route>*/}
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

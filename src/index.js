import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import TestComponent from "./components/TestComponent";
import {SearchResultComponent} from "./components/SearchResultComponent";
import {HomeComponent} from "./components/HomeComponent";
import {AboutComponent} from "./components/AboutComponent";
import {PolicyComponent} from "./components/PolicyComponent";
import {SearchComponent} from "./components/SearchComponent";
import {BrowserRouter, Route} from "react-router-dom";
import {DetailComponent} from "./components/DetailComponent";
import WikiComponent from "./components/WikiComponent";
import {LoginComponent} from "./components/LoginComponent";
import {RegisterComponent} from "./components/RegisterComponent";
import MyProfileComponent from "./components/MyProfileComponent";
import ProfileBuyerComponent from "./components/ProfileBuyerComponent";
import OrderDetailComponent from "./components/OrderDetailComponent";
import AccountFavoriteComponent from "./components/AccountFavoriteComponent";
import CartComponent from "./components/CartComponent";
import ManagementComponent from "./components/ManagementComponent";

ReactDOM.render(
    <ManagementComponent />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

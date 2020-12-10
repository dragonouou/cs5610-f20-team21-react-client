import React from "react";
import {NavBarComponent} from "./NavBarComponent";
import '../css/form.css'

export class LoginComponent extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <NavBarComponent />
                </div>

                <div className="hero-full-wrapper col-10" style={{paddingRight: "5vw", marginTop: "1vh"}}>
                    <h1 style={{marginBottom: "50px"}}>Login</h1>
                    <div className="line">
                        <label htmlFor="email" style={{width: "80px"}}>Email</label>
                        <input id="login-email" type="email" placeholder="abc@example.com"/>
                    </div>
                    <div className="line">
                        <label htmlFor="pw">Password</label>
                        <input type="text" id="pw" placeholder="password"/>
                    </div>
                    <div className="line">
                        <button type="button" className="btn btn-success" onClick={this.props.login}>Login</button>
                    </div>
                </div>
            </div>

        )
    }
}

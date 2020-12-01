import React from "react";
import {NavBarComponent} from "./NavBarComponent";
import '../css/form.css'

export class RegisterComponent extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <NavBarComponent />
                </div>

                <div className="hero-full-wrapper col-10" style={{paddingRight: "5vw", marginTop: "1vh"}}>
                    <h1 style={{marginBottom: "50px"}}>Regiser</h1>
                    <div className="line">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="name"/>
                    </div>
                    <div className="line">
                        <label htmlFor="email" style={{width: "80px"}}>Email</label>
                        <input type="email" placeholder="abc@example.com"/>
                    </div>
                    <div className="line">
                        <label htmlFor="pw">password</label>
                        <input type="text" id="pw" placeholder="password"/>
                    </div>
                    <div className="line">
                        <button type="button" className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

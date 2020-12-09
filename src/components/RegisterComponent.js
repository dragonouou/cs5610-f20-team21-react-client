import React from "react";
import {Link} from "react-router-dom";
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
                    <h1 style={{marginBottom: "50px"}}>Register</h1>
                    <div className="line">
                        <label htmlFor="username">UserName</label>
                        <input id="username" type="text" placeholder="username"/>
                    </div>
                    <div className="line">
                        <label htmlFor="firstname">First Name</label>
                        <input id="firstname" type="text" placeholder="firstname"/>
                    </div>
                    <div className="line">
                        <label htmlFor="lastname">Last Name</label>
                        <input id="lastname" type="text" placeholder="lastname"/>
                    </div>
                    <div className="line">
                        <label htmlFor="email" style={{width: "80px"}}>Email</label>
                        <input id="email" type="email" placeholder="abc@example.com"/>
                    </div>
                    <div className="line">
                        <label htmlFor="pw">Password</label>
                        <input type="text" id="pw" placeholder="password"/>
                    </div>

                    <div className="line">
                        <label htmlFor="phonenumber">PhoneNumber</label>
                        <input id="phonenumber" type="number" placeholder="000-000-0000"/>
                    </div>

                    <div className="line">
                        <label htmlFor="address">Address</label>
                        <input id="address" type="text" placeholder="Your address"/>
                    </div>

                    <div className="line">
                        <label htmlFor="role">Role</label>
                        <select type="text" id="role" placeholder="password" style={{width: "180px"}}>
                            <option value="buyer">Customer</option>
                            <option value="chef">Chef</option>
                        </select>
                    </div>
                    <div className="line">
                        <Link to="/profile">
                        <button type="button" className="btn btn-success" onClick={this.props.register}>
                            Submit
                        </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

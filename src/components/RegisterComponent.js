import React from "react";
import {NavBarComponent} from "./NavBarComponent";
import '../css/form.css'

export class RegisterComponent extends React.Component {

    state = {
        newUser: {role: "customer"},
        errors: {}
    }

    handleValidation = () => {
        let newUser = this.state.newUser;
        let errors = {};
        let formIsValid = true;

        // Name
        if (!newUser["username"]) {
            formIsValid = false;
            errors["username"] = "Cannot be empty";
        }

        if (!newUser["firstname"]) {
            formIsValid = false;
            errors["firstname"] = "Cannot be empty";
        }

        // if (typeof newUser["username"] !== "undefined") {
        //     if(!newUser["username"].match(/^[a-zA-Z]+$/)){
        //         formIsValid = false;
        //         errors["username"] = "Only letters";
        //     }
        // }

        // Email
        if (!newUser["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof newUser["email"] !== "undefined") {
            let lastAtPos = newUser["email"].lastIndexOf('@');
            let lastDotPos = newUser["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && newUser["email"].indexOf('@@') == -1 && lastDotPos > 2 && (newUser["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        // Password
        if (!newUser["password"]) {
            formIsValid = false;
            errors["password"] = "Cannot be empty";
        }

        // Phone Number
        if (typeof newUser["phoneNumber"] !== "undefined") {
            if(!newUser["phoneNumber"].match(/^[0-9]+$/)){
                formIsValid = false;
                errors["phoneNumber"] = "Only numbers";
            }
        }

        console.log(this.state.newUser.role)

        this.setState({errors: errors});
        return formIsValid;
    }

    contactSubmit = (e) => {
        e.preventDefault();

        if (this.handleValidation()) {
            this.props.register(this.state.newUser);
            alert("Form submitted");
        } else {
            alert("Form has errors.");
        }

    }

    handleChange = (field, e) => {
        let newUser = this.state.newUser;
        newUser[field] = e.target.value;
        this.setState({newUser});
    }

    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <NavBarComponent
                        userId={this.props.userId}
                        user={this.props.userInfo}/>
                </div>

                <div className="hero-full-wrapper col-10" style={{paddingRight: "5vw", marginTop: "1vh"}}>
                    <h1 style={{marginBottom: "50px"}}>Register</h1>
                    <div className="line">
                        <label htmlFor="username">UserName</label>
                        <input id="username" type="text" placeholder="username"
                               value={this.state.newUser.username}
                               onChange={this.handleChange.bind(this, "username")}/>
                        <span style={{color: "red"}}>{this.state.errors["username"]}</span>
                    </div>
                    <div className="line">
                        <label htmlFor="firstname">First Name</label>
                        <input id="firstname" type="text" placeholder="firstname"
                               value={this.state.newUser.firstname}
                               onChange={this.handleChange.bind(this, "firstname")}/>
                        <span style={{color: "red"}}>{this.state.errors["firstname"]}</span>
                    </div>
                    <div className="line">
                        <label htmlFor="lastname">Last Name</label>
                        <input id="lastname" type="text" placeholder="lastname"
                               value={this.state.newUser.lastname}
                               onChange={this.handleChange.bind(this, "lastname")}/>
                    </div>
                    <div className="line">
                        <label htmlFor="email" style={{width: "80px"}}>Email</label>
                        <input id="email" type="email" placeholder="abc@example.com"
                               value={this.state.newUser.email}
                               onChange={this.handleChange.bind(this, "email")}/>
                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                    </div>
                    <div className="line">
                        <label htmlFor="pw">Password</label>
                        <input type="text" id="pw" placeholder="password"
                               value={this.state.newUser.password}
                               onChange={this.handleChange.bind(this, "password")}/>
                        <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                    </div>

                    <div className="line">
                        <label htmlFor="phonenumber">PhoneNumber</label>
                        <input id="phonenumber" type="tel" placeholder="000-000-0000"
                               value={this.state.newUser.phoneNumber}
                               onChange={this.handleChange.bind(this, "phoneNumber")}/>
                        <span style={{color: "red"}}>{this.state.errors["phoneNumber"]}</span>
                    </div>

                    <div className="line">
                        <label htmlFor="address">Address</label>
                        <input id="address" type="text" placeholder="Your address"
                               value={this.state.newUser.address}
                               onChange={this.handleChange.bind(this, "address")}/>
                    </div>

                    <div className="line">
                        <label htmlFor="role">Role</label>
                        <select type="text" id="role" placeholder="role" style={{width: "180px"}}
                                value={this.state.newUser.role}
                                onChange={this.handleChange.bind(this, "role")}>
                            <option value="customer">Customer</option>
                            <option value="chef">Chef</option>
                        </select>
                    </div>
                    <div className="line">
                        {/*<Link to="/profile-created">*/}
                        <button type="button" className="btn btn-success" onClick={this.contactSubmit}>
                            Submit
                        </button>
                    {/*</Link>*/}
                    </div>
                </div>
            </div>
        )
    }
}

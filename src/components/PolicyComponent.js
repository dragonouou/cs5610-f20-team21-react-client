import React from "react";
import {NavBarComponent} from "./NavBarComponent";

export class PolicyComponent extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <NavBarComponent
                        page="policy"
                        userId={this.props.userId}
                        user={this.props.userInfo}/>
                </div>

                <div className="hero-full-wrapper col-10 policy-content" >
                    <h1>Policy</h1>
                    <p className="policy-text" style={{marginTop: "5vh"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>

        )
    }
}

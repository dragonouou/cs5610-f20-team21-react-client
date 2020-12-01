import React from "react";
import "./ProfileCardComponent.css"


export default class ProfileCardComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="container profile-area">
                    <div className="row">
                        <div className="col-lg-4 col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" className="img-fluid rounded-circle mb-3"/>
                                    <h3>teddyBear33</h3>
                                    <h5>Gourmet enthusiast</h5>
                                </div>
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="p-4">
                                        <i className="fa fa-users" aria-hidden="true"></i>
                                        Followers
                                    </div>
                                    <div className="p-4">
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                        Favorites
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

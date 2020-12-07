import React from "react";
import "./UserProfileCardComponent.css"
import {Link} from "react-router-dom";

class UserProfileCardComponent extends React.Component{
    render() {
        return (
            <div className="myprofile-body">
                <div className="row py-5 px-4">
                    <div className="col-xl-4 col-md-6 col-sm-10 mx-auto">
                        <div>
                            <Link to='/profile'>
                                <i className="fa fa-chevron-left mr-2"></i>
                                Back
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded overflow-hidden">
                            <div className="px-4 pt-0 pb-4 bg-dark">
                                <div className="media align-items-end profile-header">
                                    <div className="profile mr-3 col-5">
                                        <img
                                        src="https://cdn.pixabay.com/photo/2016/03/09/09/13/chef-1245676_1280.jpg"
                                        alt="..." className="rounded mb-2 img-thumbnail profile-avatar"/>
                                        <button className="btn btn-info btn-sm btn-block">
                                            Follow Me
                                        </button>
                                    </div>

                                    <div className="media-body mb-5 col-7 text-white">
                                        <h4 className="mt-0 mb-0">Adam Tarly</h4>
                                        <p className="small mb-4">
                                            <i className="fa fa-map-marker mr-2"></i>
                                            San Farcisco
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-light p-4 d-flex justify-content-end text-center">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">20</h5><small
                                        className="text-muted"> <i className="fa fa-spoon mr-1"></i>Recipes</small>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">84K</h5><small
                                        className="text-muted">
                                        <i className="fa fa-user-circle-o mr-1"></i>Followers</small>
                                    </li>
                                </ul>
                            </div>

                            <div className="py-4 px-4">
                                <div className="py-4">
                                    <h5 className="mb-3">About Me</h5>
                                    <div className="p-4 bg-light rounded shadow-sm">
                                        <p className="font-italic mb-0">"Hey, I'm Chef Tarly."</p>
                                        <ul className="list-inline small text-muted mt-3 mb-0">
                                            <li className="list-inline-item"><i className="fa fa-comment-o mr-2"></i>
                                                12 Comments
                                            </li>
                                            <li className="list-inline-item"><i className="fa fa-heart-o mr-2"></i>
                                                200 Likes
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h5 className="mb-0">Recent Recipes</h5>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 mb-2 pr-lg-1">
                                        <img
                                        src="https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/06/homemade-tiramisu-2.jpg"
                                        alt="" className="img-fluid rounded shadow-sm recipe-img"/>
                                    </div>
                                    <div className="col-lg-6 mb-2 pl-lg-1">
                                        <img
                                        src="https://images.immediate.co.uk/production/volatile/sites/2/2018/10/olive_Cheesecakes-f005ffb.jpg?quality=90&resize=768%2C574"
                                        alt="" className="img-fluid rounded shadow-sm recipe-img"/>
                                    </div>
                                    <div className="col-lg-6 pr-lg-1 mb-2">
                                        <img
                                        src="https://www.louisianatravel.com/sites/default/files/legacy_images/crawfish%20town-friedseafood.jpeg"
                                        alt="" className="img-fluid rounded shadow-sm recipe-img"/>
                                    </div>
                                    <div className="col-lg-6 pl-lg-1">
                                        <img
                                        src="https://glorias.imgix.net/menu/ceviche-trio-1.jpg"
                                        alt="" className="img-fluid rounded shadow-sm recipe-img"/>
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
export default UserProfileCardComponent;

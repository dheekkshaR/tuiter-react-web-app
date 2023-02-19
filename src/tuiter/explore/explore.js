import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const Explore = () => {
    return(
        <>
            <div className="row">
                <div className="col-11">
                    <div className="position-relative">
                        <input className="ps-5 form-control rounded-pill"
                               placeholder="Search Tuiter"/>
                        <span className="position-absolute wd-search-tuiter">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>
                <div className="col-1 align-items-center  d-flex pb-2">
                    <a href ="explore-settings.html"><i className="fas fa-cog fa-2x" style={{color: "#0D6EFD"}}></i></a>
                </div>
            </div>

            <ul className="nav nav-tabs mt-1 mb-1">
                <li className="nav-item">
                    <a className="nav-link active text-decoration-none " style={{background:"#0d6efd", color:"white"}} href="/">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="#">Entertainment</a>
                </li>
            </ul>

            <div className="position-relative">
                <img src="../../images/starship.jpeg" width="100%" alt=""/>
                <h2 className="position-absolute fw-bolder bottom-0 left-0 ms-1 text-white">SpaceX's Starship</h2>
            </div>

            <PostSummaryList/>
        </>
    );
};
export default Explore;

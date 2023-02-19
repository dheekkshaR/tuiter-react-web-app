
import React from "react";
import "./index.css";
import PostSummaryList from "../post-summary-list";
import PostList from "../post-list";

const HomeComponent = () => {
    return (
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
                <PostList/>
            </div>
            <div className="col-0 col-sm-0 col-md-0 col-lg-5 col-xl-5 col-xxl-5 d-none d-lg-block">
                <PostSummaryList/>
            </div>
        </div>
    );
};
export default HomeComponent;
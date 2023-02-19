import React from "react";
import posts from "./posts.json";
const PostItem = (posts) => {
    let imageDescription = '';
    if (posts.imageDescription !== '') {
        imageDescription =
            <div
                className="ml-3 ml-lg-1 p-2 border border-top-0 border-light wd-rounded-bottom-around">
                <h6> {posts.imageTitle} </h6>
                <span className="fw-bolder">{posts.imageDescription}</span> <br/>
                <i className="fa-solid fa-link text-secondary"></i>
                <span className="text-secondary">{posts.imageLink}</span>
            </div>
    }

    return (
        <li className="list-group-item border-top-0">
            <div className="row">

                <div className="col-1">
                    <img className="float-left float-start rounded-circle"
                         src={posts.avatar} height="45px" width="45px" alt=""/>
                </div>

                <div className="col-11">

                    <div className="ms-3 ms-lg-0 ">
                        <b>{posts.userName} <i
                            className="text-primary fa-sharp fa-solid fa-circle-check"></i>
                        </b>
                        <span className="text-secondary"> @{posts.handle} . {posts.time} </span>
                    </div>

                    <div className="ms-3 ms-lg-0">
                        {posts.title}
                    </div>

                    <div className="ms-3 ms-lg-0 mt-2">
                        <img className="rounded border border-light wd-rounded-top-around img-fluid"
                             src={posts.image} width="100%" alt=""/>
                    </div>

                    {imageDescription}

                    <div className="row ms-1 mt-3 text-secondary">
                        <div className="col-3">
                            <a href="#" className="nav-link">
                                <i className="far fa-comment"></i> &nbsp;
                                <span className="pl-sm-2"> {posts.comments} </span>
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="#" className="nav-link">
                                <i className="fas fa-retweet"></i> &nbsp;
                                <span className="pl-sm-2"> {posts.retuits} </span>
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="#" className="nav-link">
                                <i className="far fa-heart"></i> &nbsp;
                                <span className="pl-sm-2"> {posts.likes} </span>
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="#" className="nav-link">
                                <i className="fas fa-share-square"></i>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </li>
    );
};

export default PostItem;
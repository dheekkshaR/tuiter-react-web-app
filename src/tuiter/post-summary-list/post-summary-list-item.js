import React from "react";

const PostSummaryItem = ({post}) => {
    let tweet = '';
    let userNameAndTime = '';

    if (post.tweet !== '') {
        tweet = <div className="text-secondary"> {post.tweet} Tweets </div>
    }

    if (post.userName !== '') {
        userNameAndTime = <div className="fw-bolder">
            {post.userName} <></>
            <i className="fa-sharp fa-solid fa-circle-check"></i>
            <span className="text-secondary"> - {post.time} </span>
        </div>
    }

    return (
        <li className="list-group-item">
            <div className="row align-top">
                <div className="col-9">
                    <div className="text-secondary">
                        {post.topic}
                    </div>
                    {userNameAndTime}
                    <div className="fw-bolder">
                        {post.title}
                    </div>
                    {tweet}
                </div>
                <div className="col-3">
                    <img className="float-end rounded img-fluid" src={post.image} alt="" />
                </div>
            </div>
        </li>
    );
};

export default PostSummaryItem;

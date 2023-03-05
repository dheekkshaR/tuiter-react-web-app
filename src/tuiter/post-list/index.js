import React from "react";
import postsArray from "./homeposts.json"
import PostItem from "./post-item";
import PostSummaryItem from "../post-summary-list/post-summary-list-item";

const PostList = () => {
    return (
        <div className="list-group">

            {
                postsArray.map(post =>
                    <PostItem
                        key= {post.idd} posts={post}/>)
            }


        </div>

    );
};

export default PostList;
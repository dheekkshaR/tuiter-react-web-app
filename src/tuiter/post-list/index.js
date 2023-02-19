import React from "react";
import postsArray from "./posts.json"
import PostItem from "./post-item";

const PostList = () => {
    return (
        <div className="list-group">
            {
                postsArray.map(post =>
                    <PostItem
                        key= {post._id} posts={post}/>)
            }
        </div>
    );
};

export default PostList;
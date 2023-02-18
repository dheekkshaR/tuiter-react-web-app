import PostList from "../PostListItem/PostList.js";
import posts from "../PostListItem/Posts.js";

const HomeComponents = () => {
    return (`  
           <div class="list-group mt-2">
           ${PostList(posts)}
           </div>
    `);
}
export default HomeComponents;
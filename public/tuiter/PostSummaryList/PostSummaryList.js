
import PostSummaryItem from "./PostSummaryListItem.js";
import post from "./posts.js";


const PostSummaryList = () => {
    return (`<ul class="list-group">
        ${post.map(item2 => PostSummaryItem(item2)).join('')} 
        </ul>
`); }

export default PostSummaryList;
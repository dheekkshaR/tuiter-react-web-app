

import PostSummaryList from "../../PostSummaryList/PostSummaryList.js";
import post from "../../PostSummaryList/posts.js";

const ExploreComponentS = () => {
    return (`<div class="row">
                <div class= "col-11">
                    <div class="position-relative">
                        <i  class="fa-solid text-secondary position-absolute wd-search-icon fa fa-search mt-2
                         ms-3"></i>
                        <input class="form-control rounded-pill mb-2 pt-1 ps-5" placeholder = "  Search Tuiter">

                    </div> </div>

                <div class="col-1 align-items-center  d-flex pb-2">
                    <a href ="explore-settings.html">
                        <i class="fas fa-cog fa-2x"></i></a>
                </div>
            </div>


            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link border border-0 active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-sm-none d-md-block " href="#">Entertainment</a>
                </li>
            </ul>


            <div class="position-relative mt-2">
                <img src="../../images/starship.jpeg" width="100%" >
                <h2 class="position-absolute fw-bolder bottom-0 left-0 ms-1 text-light  ">SpaceX's Starship</h2>
            </div>
           
           <div>
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponentS;
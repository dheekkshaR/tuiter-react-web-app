const NavigationSidebar = () => {
    return(`
   <div class="list-group">
                <a class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter fa-sharp fa-solid "></i></a>
                <a class=" text-decoration-none list-group-item list-group-item-action" href="#">
                    <i class="fas fa-house-user">
                    </i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ">Home</span>  </a>
                <a class=" text-decoration-none list-group-item list-group-item-action active" href="#">
                    <i class="fa fa-solid fa-hashtag"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Explore </span> </a>
                <a class=" text-decoration-none list-group-item list-group-item-action" href="#">
                    <i class="fa fa-solid fa-bell"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Notifications </span> </a>
                <a class=" text-decoration-none list-group-item list-group-item-action" href="#">
                    <i class="fa fa-solid fa-envelope"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Messages </span> </a>
                <a class=" text-decoration-none list-group-item list-group-item-action" href="#">
                    <i class="fa fa-solid fa-bookmark"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Bookmarks </span> </a>
                <a class=" text-decoration-none list-group-item list-group-item-action" href="#">
                    <i class="fa fa-solid fa-list"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Lists </span> </a>
                <a class=" text-decoration-none list-group-item list-group-item-action" href="#">
                    <i class="fa fa-solid fa-user"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Profile </span> </a>
                <a class=" text-decoration-none list-group-item list-group-item-action" href="#">
                    <i class="fa fa-minus-circle"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> More </span> </a>
            </div>
       
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;
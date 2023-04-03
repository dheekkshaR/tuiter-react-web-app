const NavigationSidebar = (currentpage) => {
    let isHomeActive = false;
    let isExploreActive = false;
    let isNotificationActive = false;
    let isMessageActive = false;
    let isBookmarksActive = false;
    let isListActive = false;
    let isProfileActive = false;
    let isMoreActive = false;

    if(currentpage === "homescreen"){
        isHomeActive = true;
    }else if(currentpage === "explore"){
        isExploreActive = true;
    }else if(currentpage === "Notification"){
        isNotificationActive = true;
    }else if(currentpage === "Message"){
        isMessageActive = true;
    }else if(currentpage === "Bookmarks"){
        isBookmarksActive = true;
    } else if(currentpage === "List"){
        isListActive = true;
    } else if(currentpage === "Profile"){
        isProfileActive = true;
    } else if(currentpage === "More"){
        isMoreActive = true;
    }

    console.log(currentpage);
    console.log(isHomeActive);
    console.log(isExploreActive);

    return(`
   <div class="list-group">
                <a class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter fa-sharp fa-solid "></i></a>
                <a class=" text-decoration-none list-group-item list-group-item-action ${isHomeActive ? 'active' : ''}" href="../HomeScreen/index.html">
                    <i class="fas fa-house-user">
                    </i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ">Home</span>  </a>
                <a class=" text-decoration-none list-group-item list-group-item-action  ${isExploreActive ? 'active' : ''} " href="../explore/index_a5.html">
                    <i class="fa fa-solid fa-hashtag"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Explore </span> </a>
                <a class=" text-decoration-none list-group-item list-group-item-action ${isNotificationActive ? 'active' : ''}"  href="#">
                    <i class="fa fa-solid fa-bell"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Notifications </span> </a>
                <a class=" text-decoration-none list-group-item list-group-item-action ${isMessageActive ? 'active' : ''}" href="#">
                    <i class="fa fa-solid fa-envelope"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Messages </span> </a>
                <a class=" text-decoration-none list-group-item list-group-item-action ${isBookmarksActive ? 'active' : ''}" href="#">
                    <i class="fa fa-solid fa-bookmark"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Bookmarks </span> </a>
                <a class=" text-decoration-none list-group-item list-group-item-action ${isListActive ? 'active' : ''}" href="#">
                    <i class="fa fa-solid fa-list"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Lists </span> </a>
                <a class=" text-decoration-none list-group-item list-group-item-action  ${isProfileActive ? 'active' : ''}" href="#">
                    <i class="fa fa-solid fa-user"></i> <span class="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Profile </span> </a>
                <a class=" text-decoration-none list-group-item list-group-item-action ${isMoreActive ? 'active' : ''}" href="#">
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
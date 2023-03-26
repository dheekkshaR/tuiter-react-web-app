import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    let active = "explore";
    if(paths[2]!='') {
        active=paths[2];
    }
    else{
        active='home';
    }
    console.log(active)

    return (
        <div className="list-group">
            <li className="list-group-item list-group-item-action">
                <i className="fab fa-twitter fa-sharp fa-solid ps-1"></i>
            </li>
            <Link to="/tuiter/home"
                  className={`text-decoration-none list-group-item list-group-item-action ${active === 'home' || active === ''? 'active': ''}`}>
                <i className="fas fa-house-user ps-1"></i>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-1"> Home </span>
            </Link>
            <Link id="explore-nav-bar" to="/tuiter/explore"
                  className={`text-decoration-none list-group-item list-group-item-action ${active === 'explore'? 'active': ''}`}>
                <i className="fa fa-solid fa-hashtag ps-1"></i>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-1"> Explore </span>
            </Link>
            <Link id="notifications-nav-bar" to=""
                  className={`text-decoration-none list-group-item list-group-item-action ${active === 'notifications'? 'active': ''}`}>
                <i className="fa fa-solid fa-bell ps-1"></i>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-1"> Notifications </span>
            </Link>
            <Link id="messages-nav-bar" to=""
                  className={`text-decoration-none list-group-item list-group-item-action ${active === 'messages'? 'active': ''}`}>
                <i className="fa fa-solid fa-envelope ps-1"></i>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-1"> Messages </span>
            </Link>
            <Link id="bookmarks-nav-bar" to=""
                  className={`text-decoration-none list-group-item list-group-item-action ${active === 'bookmarks'? 'active': ''}`}>
                <i className="fa fa-solid fa-bookmark ps-1"></i>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-1"> Bookmarks </span>
            </Link>
            <Link id="lists-nav-bar" to=""
                  className={`text-decoration-none list-group-item list-group-item-action ${active === 'lists'? 'active': ''}`}>
                <i className="fa fa-solid fa-list ps-1"></i>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-1"> Lists </span>
            </Link>
            <Link id="profile-nav-bar" to="/tuiter/profile"
                  className={`text-decoration-none list-group-item list-group-item-action ${(active === 'profile' || active === 'edit-profile') ? 'active': ''}`}>
                <i className="fa fa-solid fa-user ps-1"></i>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-1"> Profile </span>
            </Link>
            <Link id="more-nav-bar" to=""
                  className={`text-decoration-none list-group-item list-group-item-action ${active === 'more'? 'active': ''}`}>
                <i className="fa fa-minus-circle ps-1"></i>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none ps-1"> More </span>
            </Link>
            <button className="btn btn-primary w-100 rounded-pill mt-1">
                <span className="button-text d-none d-sm-block d-lg-none d-xl-block"
                      style={{marginLeft: "-3px"}}>Tuit</span>
                <span className="button-text d-none d-lg-block d-xl-none"
                      style={{marginLeft: "-6px"}}>Tuit</span>
                <b className="button-text d-block d-sm-none">T</b>
            </button>
        </div>
    );
};

export default NavigationSidebar;
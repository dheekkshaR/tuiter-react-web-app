import {useSelector} from "react-redux";
import React, {useState} from "react";
import ProfileBanner from "./profile-banner";
import {Link} from "react-router-dom";

const ProfileComponentList = () => {
    let profileInfo = useSelector(state => state.profile)
    let [profile] = useState(profileInfo);
    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className="col-11">
                    <span className=" h5"> {profile.firstName} {profile.lastName} </span> <br/>
                    <span className="text-secondary" style={{fontSize: "0.875em"}}>
                        {profile.numberOfTweets} Tweets
                    </span>
                </div>
            </div>

            <ProfileBanner/>

            <Link to={"/tuiter/edit-profile"} className="btn btn-light rounded-pill float-end fw-bold"
                  style={{marginTop: "-15px"}}>
                Edit Profile
            </Link>

            <div>
                <br/> <br/>
                <span className=" h5 fw-bold"> {profile.firstName} {profile.lastName} </span> <br/>
                <span className="text-secondary" style={{fontSize: "0.875em"}}>
                        {profile.handle}
                </span> <br/>
                <div className="mt-2">
                    <p className="text-black" style={{fontSize: "0.875em"}}>
                        {profile.bio}
                    </p>
                </div>

                <div>
                    <i className="bi bi-geo-alt"></i>
                    <span className="text-secondary"
                          style={{fontSize: "15px"}}> {profile.location} </span>
                    &nbsp;&nbsp;&nbsp;
                    <i className="bi bi-balloon"></i>
                    <span className="text-secondary"
                          style={{fontSize: "15px"}}> Born {profile.dateOfBirth} </span>
                    &nbsp;&nbsp;&nbsp;
                    <i className="bi bi-calendar3"></i>
                    <span className="text-secondary"
                          style={{fontSize: "15px"}}> Joined {profile.dateJoined} </span>
                </div>
                <div className="mt-1">
                    <span className="fw-bold"
                          style={{fontSize: "0.875em"}}>{profile.followingCount}</span>
                    <span className="text-secondary" style={{fontSize: "0.875em"}}> Following</span>
                    &nbsp;&nbsp;&nbsp;
                    <span className="fw-bold"
                          style={{fontSize: "0.875em"}}>{profile.followersCount}</span>
                    <span className="text-secondary" style={{fontSize: "0.875em"}}> Followers</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponentList;
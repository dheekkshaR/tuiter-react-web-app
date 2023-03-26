import React, {useState} from "react";

import {useSelector} from "react-redux";

const ProfileBanner = () => {
    let profileInfo = useSelector(state => state.profile)
    let [profile] = useState(profileInfo);
    return (
        <>
            <div className="row">
                <img src={profile.bannerPicture} alt="" width={100} height={210}/>
            </div>

            <div className="">
                <img className="position-absolute rounded-circle"
                     src={profile.profilePicture} alt=""
                     style={{height: "auto", width: "150px", marginLeft:"15px", marginTop: "-70px"}}/>
            </div>
            <br/>
        </>
    )
}

export default ProfileBanner;
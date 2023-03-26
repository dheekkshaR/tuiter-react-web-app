import React from "react";

const WhoToFollowListItem = ({who}) => {
    return (

        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-2 ">
                    <img className="wd-round-image"
                         src={who.avatarIcon} height="40px" width="40px" alt=""/>
                </div>
                <div className="col-6 ">
                    <div className="row">
                        <b>{who.userName} <i className=" fa fa-solid fa-circle-check"></i>
                        </b>
                        <div className="text-muted"> @{who.handle}</div>
                    </div>
                </div>
                <div className="col-4">
                    <button className="btn btn-primary w-100 rounded-pill">
                        {/*Follow*/}
                        <span className="button-text d-none d-lg-block d-xl-none"
                              style={{marginLeft: "-5px"}}>Follow</span>
                        <span className="button-text d-none d-xl-block">Follow</span>
                    </button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;
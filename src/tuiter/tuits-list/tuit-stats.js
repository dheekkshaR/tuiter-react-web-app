import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

const TuitStats = ({tuits}) => {
    let [liked, setLiked] = useState(tuits.liked);
    let [likes, setLikes] = useState(tuits.likes);
    const changeLiked = () => {
        if (liked){
            setLiked(!liked)
            setLikes(parseInt(likes)-1)
            console.log(likes)
        }
        else{
            setLiked(!liked)
            setLikes(parseInt(likes)+1)

            console.log(likes)
        }

    }

    return (
        <div className="row ms-1 mt-3 text-secondary">
            <div className="col-3">
                <Link to={""} className="nav-link">
                    <i className="	far fa-comment"></i> &nbsp;
                    <span className="pl-sm-2"> {tuits.comments} </span>
                </Link>
            </div>
            <div className="col-3">
                <Link to={""} className="nav-link">
                    <i className="fa fa-solid fa-retweet"></i> &nbsp;
                    <span className="pl-sm-2"> {tuits.retuits} </span>
                </Link>
            </div>
            <div className="col-3">
                <Link onClick={changeLiked} className="nav-link" to={""}>
                    {
                        liked &&
                        <i className="fa fa-solid fa-heart text-danger"></i>
                    }
                    {
                        !liked &&
                        <i className="	far fa-heart"></i>
                    }
                    &nbsp;
                    <span className="pl-sm-2"> {likes} </span>
                </Link>
            </div>
            <div className="col-3">
                <Link to={""} className="nav-link">
                    <i className="	fas fa-share-alt"></i>
                </Link>
            </div>
        </div>
    )
}

export default TuitStats;
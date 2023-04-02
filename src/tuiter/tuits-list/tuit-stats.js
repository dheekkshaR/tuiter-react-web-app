import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuits}) => {
    const dispatch = useDispatch();
    /*let [liked, setLiked] = useState(tuits.liked);
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

    }*/
    const changeLiked = () => {
        if (tuits.liked === false) {
            dispatch(updateTuitThunk({
                ...tuits,
                liked: true,
                likes: tuits.likes + 1
            }))
        } else {
            if (tuits.liked === true) {
                dispatch(updateTuitThunk({
                    ...tuits,
                    liked: false,
                    likes: tuits.likes - 1
                }))
            }
        }
    }
    function changeDisliked() {
        if (tuits.disliked === false) {
            dispatch(updateTuitThunk({
                ...tuits,
                disliked: true,
                dislikes: tuits.dislikes + 1
            }))
        } else {
            if (tuits.disliked === true) {
                dispatch(updateTuitThunk({
                    ...tuits,
                    disliked: false,
                    dislikes: tuits.dislikes - 1
                }))
            }
        }
    }



    return (
        <div className="row ms-1 mt-3 text-secondary">
            <div className="col-2">
                <Link to={""} className="nav-link">
                    <i className="	far fa-comment"></i> &nbsp;
                    <span className="pl-sm-2"> {tuits.comments} </span>
                </Link>
            </div>
            <div className="col-2">
                <Link to={""} className="nav-link">
                    <i className="fa fa-solid fa-retweet"></i> &nbsp;
                    <span className="pl-sm-2"> {tuits.retuits} </span>
                </Link>
            </div>
            <div className="col-2">
                <Link onClick={changeLiked} className="nav-link" to={""}>
                    {
                        tuits.liked &&
                        <i className="fa fa-solid fa-heart text-danger"></i>
                    }
                    {
                        !tuits.liked &&
                        <i className="	far fa-heart"></i>
                    }
                    &nbsp;
                    <span className="pl-sm-2"> {tuits.likes} </span>
                </Link>
            </div>
            <div className="col-2">
                <Link onClick={changeDisliked} className="nav-link" to={""}>
                    {
                        tuits.disliked &&
                        <i className="fa fa-solid fa-thumbs-down"></i>
                    }
                    {
                        !tuits.disliked &&
                        <i className="	far fa-thumbs-down"></i>
                    }
                    &nbsp;
                    <span className="pl-sm-2"> {tuits.dislikes} </span>
                </Link>
            </div>
            <div className="col-2">
                <Link to={""} className="nav-link">
                    <i className="	fas fa-share-alt"></i>
                </Link>
            </div>
        </div>
    )
}

export default TuitStats;
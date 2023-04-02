import React, {useState} from "react";
//import {createTuit} from "../tuits-list/tuits-reducer";
import {createTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const currentUser = {
    "userName": "NASA",
    "handle": "nasa",
    "avatar": "../images/nasa.png"
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "comments": 0,
    "retuits": 0,
    "likes": 0,
    "image": "",
    "imageLink": "",
    "imageDescription": "",
    "imageTitle": "",
    "dislikes":0,
    "disliked":false
}

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            ...templateTuit,
            title: whatsHappening
        }
        dispatch(createTuitThunk(newTuit));
        setWhatsHappening('')
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="../../images/nasa.png" width={60} alt=""/>
            </div>
            <div className="col-10">
               <textarea value={whatsHappening} placeholder="What's happening?"
                         className="form-control border-0"
                         onChange={(event) => setWhatsHappening(event.target.value)}>
               </textarea>
                <div>
                    <button
                        className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="	far fa-image me-3 fa-2xs"></i>
                        <i className="bi bi-filetype-gif me-3 fa-2xs"></i>
                        <i className="bi bi-bar-chart me-3 fa-2xs"></i>
                        <i className="	far fa-smile me-3 fa-2xs"></i>
                        <i className="bi bi-geo-alt fa-2xs"></i>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr/>
            </div>
        </div>
    );
}
export default WhatsHappening;
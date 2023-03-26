import React from "react";
//import tuits from "./tuits.json"
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item.js";

const TuitsList = () => {
    const tuits = useSelector(state => state.tuitsMain)
    return (
        <div className="list-group">
            {
                tuits.map(tuit => <TuitItem key= {tuit._id} tuits={tuit}/>)
            }
        </div>
    );
};

export default TuitsList;
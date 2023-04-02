import React, {useEffect} from "react";
//import tuits from "./tuits.json"
import {useDispatch,useSelector} from "react-redux";
import TuitItem from "./tuit-item.js";
import {findTuitsThunk}
    from "../../services/tuits-thunks";
const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsMain)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <div className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit => <TuitItem key= {tuit.idd} tuits={tuit}/>)
            }
        </div>

    );
};

export default TuitsList;
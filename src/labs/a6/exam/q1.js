

import React, {useState} from "react";

import { Routes, Route} from "react-router"
import {BrowserRouter, Link} from "react-router-dom"
import Qwe from "./Qwe";

const q = {a: 123, b: 234}
const w = {a:q.a, c: 345, b: 456}
console.log(JSON.stringify(w))

function Xyz() {
    const [qwe, wer] = useState([123, 234, 345, 456, 567])
    const ert = (rty) => {
        const tyu = qwe.filter(yui => yui != 345)
        wer(tyu)
    }
    return(
        <div>
            <ul>
                {qwe.map(uio => <li>{uio}</li>)}
            </ul>
            <button onClick={() => ert(345)}>BUTTON</button>
        </div>
    )
}
export default Xyz
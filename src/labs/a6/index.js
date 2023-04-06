import {Link}
    from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput
    from "./conditional-output";
import TodoList from "./todo/todo-list";
import Exam from "./exam";
import App1 from "./exam/q1";

function Assignment6() {
    return (
        <div>
            <h1>Assignment 6</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <Exam/>


        </div>
    );
}
export default Assignment6;


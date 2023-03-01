// src/components/TodoList.js

import React from "react";
import {Link} from "react-router-dom";

const TodoList = (props) => {

   // Affichage
    return <>
    <ul>
        {props.tasks.map(item => <li key={item.id}>
            <label>
                <input type="checkbox" id="todo-${item.id}" checked={item.done} onChange={() => props.onTaskToggle(item.id)} />
                {item.text}
                <Link to={item.id + "/details"}>Details</Link>
            </label>
        </li>)}
    </ul>
    </>
}

export default TodoList;
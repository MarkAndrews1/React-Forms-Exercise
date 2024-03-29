import React from "react";
import './Todo.css'

const Todo = ({
    id,
    task,
    removeTodo
}) => {
    const remove = () => removeTodo(id)

    return(
        <li className="Todo-li">
            <p>{task}</p>
            <button className="Todo-remove-btn" onClick={remove}>X</button>
        </li>
    )
}

export default Todo
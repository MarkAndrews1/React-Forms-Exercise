import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import "./NewTodoForm.css"

const NewTodoForm = ({addTodos}) => {
    const INITIAL_STATE = {
        task: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const {task} = formData

    const handleChange = e => {
        const {name, value} = e.target
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTodos({id: uuid(), formData})
        setFormData(INITIAL_STATE)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Please enter a Task: </label>
                <input
                id="task" 
                type="text"
                name="task"
                value={task}
                placeholder="Enter Task Here"
                onChange={handleChange}
                 />
                 <button className="NTF-btn">Make a Task!</button>
            </form>
        </div>
    )

}

export default NewTodoForm
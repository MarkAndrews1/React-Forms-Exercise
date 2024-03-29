import React, { useState } from "react";
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css"

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodos = todoObj => {
        setTodos(todos => [
            ...todos,
            todoObj
        ])
    }

    const removeTodo = (id) => {
        setTodos(todos => todos.filter(t => t.id !== id))
    }

    const todoComps = todos.map(t => (
        <Todo 
            id={t.id}
            task={t.formData.task || "Oops you forgot to enter a task..."}
            removeTodo={removeTodo}
        />
    ))

    return(
        <div>
            <h1>Create a Todo!</h1>
            <NewTodoForm addTodos={addTodos}/>
            <ul>
            {todoComps}
            </ul>

        </div>
    )
}

export default TodoList
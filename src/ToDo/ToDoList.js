import React from "react";
import todoList from './Todo.json';
import { ToDoItem } from "./ToDoItem.js";

import "./ToDoList.css";

export const ToDoList = () => {

    const  renderTodos = () => {
        return todoList.map(todo=>{
            return (<li key={todo.id}><ToDoItem todo={todo}/></li>
                )
        })
    }
    return(<section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list" >
            {renderTodos()}
        </ul>
    </section>);
}
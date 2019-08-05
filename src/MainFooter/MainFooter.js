import React from "react";

import "./MainFooter.css"
export const MainFooter = () => (
    <footer className="footer" ><span className="todo-count">
        <strong> 2 </strong>
        <span > </span>
        <span >items</span>
        <span > left</span>
    </span>
        <ul className="filters">
            <li ><a href="#/" className={"selected"}>All</a></li>
            <span> </span>
            <li><a href="#/active" >Active</a></li>
            <span > </span>
            <li ><a href="#/completed" >Completed</a></li>
        </ul>
        <button className="clear-completed" >Clear completed</button>
    </footer>
)
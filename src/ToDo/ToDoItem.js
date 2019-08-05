import React from "react";

import "./ToDoItem.css";

export class ToDoItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEditable:false
        }
    }
    render(){

    let {todo} = this.props;
    let classNames = ["todo-item"];
                if(todo.isCompleted)
                classNames.push("completed");
                if(this.state.isEditable)
                classNames.push("editing");

                console.log(classNames);
                return (<div className={classNames.join(" ")}>
                    <div className="view" >
                        <input className="toggle" type="checkbox"
                            checked={todo.isCompleted}
                            
                        />
                        <label >{todo.task}</label>
                        <button className="destroy" ></button>
                    </div>
                    <input className="edit" 
                    value={todo.task} />
                </div>
                )
    }
}
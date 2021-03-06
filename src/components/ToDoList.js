import React from 'react';
import ToDo from './ToDo';

const ToDoList = (props)=> {
    return (
        <React.Fragment>
            {props.todos.map(todo => (
                <ToDo todo={todo} key={todo.id} removeTodo={props.removeTodo}/>
            ))}
        </React.Fragment>
    )
};

export default ToDoList;
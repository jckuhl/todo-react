import React, { Component } from 'react';
import Todo from '../models/todo';
import './../style/NewToDo.css'

export default class NewTodo extends Component {

    state = {
        newTodo: React.createRef(),
        priority: React.createRef()
    }

    addTodo(event) {
        event.preventDefault();
        const task = this.state.newTodo.current.value;
        const priority = this.state.priority.current.value;
        let id;
        do {
            id = Math.floor(Math.random() * 1000000);
        } while(this.props.ids.includes(id));
        this.props.addTodo(new Todo(task, priority, id));
    }

    render() {
        return (
            <form onSubmit={this.addTodo.bind(this)}>
                <label htmlFor="newtodo">New Todo</label>
                <input ref={this.state.newTodo} type="text" id="newtodo"/>
                <label htmlFor="priority">Priority</label>
                <select id="priority" ref={this.state.priority}>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </select>
                <button>Create</button>
            </form>
        );
    }
}
import React, { Component } from 'react';
import Todo from '../models/todo';
import './../style/NewToDo.css'

export default class NewTodo extends Component {

    state = {
        newTodo: React.createRef(),
        priority: React.createRef(),
        invalid: true
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

    setDisableFlag() {
        const disabled = this.state.newTodo.current.value === '';
        this.setState({ invalid: disabled })
    }

    render() {
        return (
            <form onSubmit={this.addTodo.bind(this)}>
                <div className="form-grid">
                    <label htmlFor="newtodo" className="form-grid-item">New Todo:</label>
                    <input ref={this.state.newTodo} 
                        type="text" id="newtodo" 
                        className="form-grid-item" 
                        onInput={this.setDisableFlag.bind(this)}
                    />
                    <label htmlFor="priority" className="form-grid-item">Priority:</label>
                    <select id="priority" ref={this.state.priority} className="form-grid-item">
                        <option value="1" selected>Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                    </select>
                    <button className="create-btn" disabled={this.state.invalid}>Create</button>
                </div>
            </form>
        );
    }
}
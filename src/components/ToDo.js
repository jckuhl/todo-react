import React, { Component } from 'react';
import datefmt from './../scripts/datefmt';
import './../style/ToDo.css';

export default class ToDo extends Component {
    state = {
        done: false
    }

    delete(id) {
        this.props.removeTodo(id);
    }

    complete() {
        const done = !this.state.done;
        this.setState({ done });
    }

    render() {
        const { task, priority, start } = this.props.todo;
        const priorityClass = {
            1: 'yellow',
            2: 'lightred',
            3: 'red'
        }
        return (
            <div className={(this.state.done ? 'green' : priorityClass[priority]) + ' todo'}>
                <input type="checkbox" id="completed" onChange={this.complete.bind(this)}/>
                <p>{task}, started on {datefmt(start)}</p>
                <button
                    aria-label="Remove task"
                    onClick={this.delete.bind(this, this.props.todo.id)} 
                    className="close">
                    <strong>&times;</strong>
                </button>
            </div>
        )
    }
}
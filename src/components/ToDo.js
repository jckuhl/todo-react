import React, { Component } from 'react';
import './../style/ToDo.css';

export default class ToDo extends Component {
    render() {
        const { task, priority, start, completed } = this.props.todo;
        const priorityClass = {
            1: 'yellow',
            2: 'lightred',
            3: 'red'
        }
        return (
            <div className={priorityClass[priority] + ' todo'}>
                <input type="checkbox" id="completed" checked={completed}/>
                <p>{task}, started on {start.toString()}</p>
            </div>
        )
    }
}
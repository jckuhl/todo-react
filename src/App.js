import React, { Component } from 'react';
import Header from './components/Header';
import './style/App.css';
import NewTodo from './components/NewTodo';
import ToDoList from './components/ToDoList';
import Todo from './models/todo';

class App extends Component {
    state = {
        todos: [
            new Todo('Feed Dog', 3, '1'),
            new Todo('Water plants', 2, '2'),
            new Todo('Bath Grandma', 1, '3')
        ]
    }

    addTodo(todo) {
        console.log(todo);
        this.setState((state)=> {
            return state.todos.unshift(todo);
        })
    }

    render() {
        return ( 
            <div className="app" >
                <Header/>
                <NewTodo addTodo={this.addTodo.bind(this)} ids={this.state.todos.map(todo => todo.id)}/>
                <ToDoList todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;
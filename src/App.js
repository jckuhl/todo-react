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
        this.setState((state)=> {
            return state.todos.unshift(todo);
        })
    }

    removeTodo(id) {
        id = id.toString();
        const todos = this.state.todos.filter(todo => todo.id !== id)
        this.setState({ todos });
    }

    displayToDoList() {
        if(this.state.todos.length) {
            return <ToDoList todos={this.state.todos} removeTodo={this.removeTodo.bind(this)}/>
        } else {
            return <h3>Add A New Task!</h3>
        }
    }

    render() {
        return ( 
            <div className="app" >
                <Header/>
                <NewTodo addTodo={this.addTodo.bind(this)} ids={this.state.todos.map(todo => todo.id)}/>
                {this.displayToDoList()}
            </div>
        );
    }
}

export default App;
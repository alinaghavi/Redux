import React, {Component} from 'react';
import '../Css/App.css';
import ToDoList from './ToDoList';
import AddToDo from './AddToDo';
import Navbar from './Navbar';

class App extends Component {
    state = {
        toDoList: [
            {todo: 'Wash the dishes', priority: 'High', status: 'open', id: 1},
            {todo: 'Do the home works', priority: 'Medium', status: 'open', id: 2},
            {todo: 'Tell my mom', priority: 'Low', status: 'Closed', id: 3}
        ]
    };
    deleteItem = (id) => {
        let toDoList = this.state.toDoList.filter((item) => {
            return item.id !== id;
        });
        this.setState({
            toDoList: toDoList
        })

    };

    addItem = (item) => {
        item.id = Math.random();
        let toDoList = [...this.state.toDoList, item];
        this.setState({
            toDoList: toDoList
        })
    };

    render() {
        return (
            <div className="todo-app container">
                <Navbar/>
                <h1 className="center blue-text">Todo's</h1>
                <ToDoList toDoList={this.state.toDoList} deleteItem={this.deleteItem}/>
                <h3 className="center blue-text">Add New Todo</h3>
                <AddToDo addItem={this.addItem}/>
            </div>
        );
    }
}


export default App;

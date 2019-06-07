import React, {Component} from 'react';
import '../Css/App.css';
import ToDoList from './ToDoList';
import AddToDo from './AddToDo';

class App extends Component {
    state = {
        toDoList: [
            {todo: 'Wash the dishes', priority: 'High', status: 'open', id: 1},
            {todo: 'Do the home works', priority: 'Medium', status: 'open', id: 2},
            {todo: 'Tell my mom', priority: 'Low', status: 'Closed', id: 3}
        ]
    };

    addItem = (item) => {
        item.id = Math.random();
        let toDoList = [...this.state.toDoList, item];
        console.log(toDoList);
        this.setState({
            toDoList: toDoList
        })
    };

    render() {
        return (
            <div>
                <ToDoList toDoList={this.state.toDoList}/>
                <AddToDo addItem={this.addItem}/>
            </div>
        );
    }
}


export default App;

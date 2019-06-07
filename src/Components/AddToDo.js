import React, {Component} from 'react';

class AddToDo extends Component {
    state = {
        todo: null,
        priority: null,
        status: null
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">To Do : </label>
                    <input type="text" id="todo" onChange={this.handleChange}/>
                    <label htmlFor="priority">Priority : </label>
                    <input type="text" id="priority" onChange={this.handleChange}/>
                    <label htmlFor="status">Status : </label>
                    <input type="text" id="status" onChange={this.handleChange}/>
                    <button>Add To List</button>
                </form>
            </div>
        );
    }
}


export default AddToDo;

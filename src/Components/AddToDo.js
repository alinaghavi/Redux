import React, {Component} from 'react';

class AddToDo extends Component {
    state = {
        todo: "",
        priority: "",
        status: ""
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            todo: "",
            priority: "",
            status: ""
        })
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="col s6 input-field">
                        <input type="text" id="todo" onChange={this.handleChange} value={this.state.todo}/>
                        <label htmlFor="todo">To Do : </label>
                    </div>
                    <div className="col s2 input-field">
                        <label htmlFor="priority">Priority : </label>
                        <input type="text" id="priority" onChange={this.handleChange} value={this.state.priority}/>
                    </div>
                    <div className="col s2 input-field">
                        <label htmlFor="status">Status : </label>
                        <input type="text" id="status" onChange={this.handleChange} value={this.state.status}/>
                    </div>
                    <div className="col s1 add-btn">
                        <button className="waves-effect waves-light" >
                            <i className="Large material-icons  delete-btn">add</i>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}


export default AddToDo;

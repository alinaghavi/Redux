import React from 'react';

const ToDoList = ({toDoList, deleteItem}) => {
    const toDo = toDoList.length ? (toDoList.map(toDo => {
            return (
                <div className="item collection-item row" key={toDo.id}>
                    <div className="content">
                        <div className="todo col s6">
                            {toDo.todo}
                        </div>
                        <div className="priority col s2">
                            {toDo.priority}
                        </div>
                        <div className="status col s2">
                            {toDo.status}
                        </div>
                        <div className="status col s1">
                            <button className="waves-effect waves-light" onClick={() => {
                                deleteItem(toDo.id)
                            }}>
                                <i className="Large material-icons  delete-btn">delete_forever</i>
                            </button>
                        </div>
                        <div className="status col s1">
                        </div>
                    </div>
                </div>
            )
        }))
        :
        (
            <p className="center">
                You have no todo's left, congratulation
            </p>
        );
    return (
        <div className="collection">
            <div className="row collection-item header">
                <div className="col s6">You task</div>
                <div className="col s2">Task priority</div>
                <div className="col s2">Task status</div>
                <div className="col s1">Delete task</div>
                <div className="col s1">Edit task</div>
            </div>
            {toDo}
        </div>
    );
};

export default ToDoList;

import React from 'react';

const ToDoList = ({toDoList}) => {
    const toDo = toDoList.map(toDo => {
        return (
            <div className="item" key={toDo.id}>
                <div className="todo">
                    {toDo.todo}
                </div>
                <div className="priority">
                    {toDo.priority}
                </div>
                <div className="status">
                    {toDo.status}
                </div>
            </div>
        )
    });
    return (
        <div>
            {toDo}
        </div>
    );
};

export default ToDoList;

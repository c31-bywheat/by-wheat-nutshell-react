import React, { Component } from 'react'
import './tasks.css'

export default class TaskList extends Component {

    complete
    render() {
        let currentId = sessionStorage.getItem("userId");
        currentId = parseInt(currentId)
const currentTasks = this.props.tasks.filter(task => task.userId === currentId)
        return (
            <React.Fragment>
                <div className="buttonHolder">
                    <button className="submitButton btn-primary"
                        onClick={() => {
                            this.props.history.push("/tasks/new")
                        }}
                    >ADD TASK</button>
                </div>
                <div className="taskHolder">
                    {
                        currentTasks.map(task =>
                            <div key={task.id} className="taskBox">
                                <input type="checkBox"></input>
                                <h5>{task.item}</h5>
                                <p>Complete by {task.byDate}</p>

                                <button className="editButton" onClick={() =>
                                this.props.history.push(`/tasks/${task.id}/edit`)}>Edit</button>

                                <button className="deleteButton" onClick={() => this.props.deleteTask(task.id)}>Delete</button>
                            </div>
                        )
                    }

                </div>
            </React.Fragment>
        )
    }
}

import React, { Component } from 'react'
import './tasks.css'

export default class TaskList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="buttonHolder">
                    <button className="taskButton">ADD TASK</button>
                </div>
                <div className="taskHolder">
                    {
                        this.props.tasks.map(task =>
                            <div key={task.id} className="taskBox">
                                <input type="checkBox"></input>
                                <h5>{task.item}</h5>
                                <p>Complete by {task.byDate}</p>
                                <button className="taskButton">Edit</button>
                            </div>
                        )
                    }

                </div>
            </React.Fragment>
        )
    }
}

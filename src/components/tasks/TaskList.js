import React, { Component } from 'react'
import './tasks.css'

export default class TaskList extends Component {

    complete
    render() {
        return (
            <React.Fragment>
                <div className="buttonHolder">
                    <button className="button">ADD TASK</button>
                </div>
                <div className="taskHolder">
                    {
                        this.props.tasks.map(task =>
                            <div key={task.id} className="taskBox">
                                <input type="checkBox"></input>
                                <h5>{task.item}</h5>
                                <p>Complete by {task.byDate}</p>
                                <button className="button">Edit</button>
                                <button className="button">Delete</button>
                            </div>
                        )
                    }

                </div>
            </React.Fragment>
        )
    }
}

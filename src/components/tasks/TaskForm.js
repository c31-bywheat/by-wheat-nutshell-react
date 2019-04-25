import React, { Component } from "react";

export default class TaskForm extends Component {

    state = {
        item: "",
        byDate: ""
    };

    // Update state whenever an input field is edited
    handleFieldChange = (event) => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    constructNewTask = evt => {
        evt.preventDefault();
        const newTask = {
            item: this.state.item,
            byDate: this.state.byDate,
        };

        this.props
            .addTask(newTask)
            .then(() => this.props.history.push("/tasks"));
    }


    render() {
        return (
            <React.Fragment>
                <form className="taskForm">
                    <div className="item-form">
                        <label htmlFor="item">Task</label>
                        <input
                            type="text"
                            required
                            className="item-form"
                            onChange={this.handleFieldChange}
                            id="item"
                            placeholder="Enter a new task"
                        />
                    </div>
                    <div className="item-form">
                        <label htmlFor="byDate">Date</label>
                        <input
                            type="date"
                            required
                            onChange={this.handleFieldChange}
                            id="byDate"
                            placeholder="Complete by: "
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewTask}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        );
    }
}
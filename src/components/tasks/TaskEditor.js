import React, { Component } from "react"
import TaskManager from '../../modules/TaskManager'

export default class TaskEditor extends Component {

        state = {
                item: "",
                byDate: ""
        }

        handleFieldChange = evt => {
                const stateToChange = {}
                stateToChange[evt.target.id] = evt.target.value
                this.setState(stateToChange)
        }

        updateExistingTask = evt => {
                evt.preventDefault()
                const editedTask = {
                        id: this.props.match.params.taskId,
                        item: this.state.item,
                        byDate: this.state.byDate
                }

                this.props.editTask(editedTask)
                        .then(() => this.props.history.push("/tasks"))
        }

        componentDidMount() {
                TaskManager.getTask(this.props.match.params.taskId)
                        .then(task => {
                                console.log(this.props)
                                this.setState({
                                        item: task.item,
                                        byDate: task.byDate
                                })
                        })
        }

        render() {
                return (
                        <React.Fragment>
                                <form className="animalForm">
                                        <div className="item-form">
                                                <label htmlFor="item">Task</label>
                                                <input
                                                        type="text"
                                                        required
                                                        className="form-control"
                                                        onChange={this.handleFieldChange}
                                                        id="item"
                                                        value={this.state.item}
                                                />
                                        </div>
                                        <div className="item-form">
                                                <label htmlFor="byDate">Date</label>
                                                <input
                                                        type="text"
                                                        required
                                                        className="form-control"
                                                        onChange={this.handleFieldChange}
                                                        id="byDate"
                                                        value={this.state.byDate}
                                                />
                                        </div>
                                        <button
                                                type="submit"
                                                onClick={this.updateExistingTask}
                                                className="btn btn-primary"
                                        >
                                                Submit
            </button>
                                </form>
                        </React.Fragment>
                );
        }
}
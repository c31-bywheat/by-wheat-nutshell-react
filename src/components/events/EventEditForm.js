import React, { Component } from "react";
import EventManager from "../../modules/EventManager";
import "./events.css";

export default class EventEditForm extends Component {
  //Set initial State
  state = {
    name: "",
    location: "",
    date: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  };

  updateExistingEvent = evt => {
    evt.preventDefault()

    if (this.state.event === "") {
      window.alert("Please enter edit Event");
    } else {
      const editEvent = {
        id: this.props.match.params.eventId,
        name: this.state.name,
        location: this.state.location,
        date: this.state.date
      };
      this.props.editEvent(editEvent)
        .then(() => this.props.history.push("/events"));
    }
  };
  componentDidMount() {
    EventManager.getEvent(this.props.match.params.eventId)
      .then(event => {
        this.setState({
          name: event.name,
          location: event.location,
          date: event.date
        });
      });
  }
  render() {
    return (
      <React.Fragment>
        <form className="eventForm">
          <div className="form-group">
            <label htmlFor="name">Edit Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              value ={this.state.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Edit Location</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="location"
              value ={this.state.location}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Edit Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="date"
              value={this.state.date}
            />
          </div>

          <button
            type="submit"
            onClick={this.updateExistingEvent}
            className="btn btn-primary"
          >
            Update
          </button>
        </form>
      </React.Fragment>
    );
  }
}

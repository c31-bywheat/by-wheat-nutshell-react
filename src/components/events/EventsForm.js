import React, { Component } from 'react'
import "./events.css"

export default class EventsForm extends Component {
  // Set initial state
  state = {
    name: "",
    location: "",
    date: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  constructNewEvent = evt => {
    evt.preventDefault();
      const data = {
        name: this.state.EventName,
        location: this.state.eventLocation,
        date: this.state.eventDate
        // Make sure the eventId is saved to the database
      };

      // Create the events and redirect user to events list
      this.props
        .postEvent(data)
        .then(() => this.props.history.push("/events"));

  };

  render() {
    return (
      <React.Fragment>
        <form className="eventForm">
          <div className="form-group">
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="EventName"
              placeholder="Event name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Event Location</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="eventLocation"
              placeholder="Location"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Event Date</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="eventDate"
              placeholder="Date"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewEvent}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

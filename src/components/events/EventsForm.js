import React, { Component } from 'react'
import "./evnts.css"

export default class EventsForm extends Component {
  // Set initial state
  state = {
    title: "",
    location: "",
    date: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    console.log(stateToChange)
    this.setState(stateToChange);
  };
  constructNewEvent = evt => {
    evt.preventDefault();
    if (this.state.eventsId === "") {
      window.alert("Please select a caretaker");
    } else {
      const event = {
        name: this.state.name,
        location: this.state.location,
        date: this.state.date,
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        employeeId: parseInt(this.state.eventsId)
      };

      // Create the animal and redirect user to animal list
      this.props
        .addAnimal(event)
        .then(() => this.props.history.push("/events/new"));
    }
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
              id="name"
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
              id="location"
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
              id="date"
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

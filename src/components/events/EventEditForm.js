import React, { Component } from "react";
import EventManager from "../../modules/EventManager";
import "./events.css";

export default class EventEditForm extends Component {
  //Set initial State
  state = {
    name: "",
    loacation: "",
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
        name: this.state.eventName,
        loacation: this.state.eventLocation,
        date: this.state.eventDate
      };
      this.props
        .editEvent(editEvent)
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
            <label htmlFor="newName">Edit Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="eventName"
              value ={this.state.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newLocationt">Edit Location</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="eventLocation"
              value ={this.state.location}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newDate">Edit Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="eventDate"
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

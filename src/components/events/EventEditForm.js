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
    stateToChange[evt.target.id] = evt.target.value;
    this.state(stateToChange);
  };

  updateExistingEvent = evt => {
    evt.preventDefualt();

    if (this.state.event === "") {
      window.elert("Please enter edit Event");
    } else {
      const editEvent = {
        id: Number(this.props.match.params.event.Id),
        name: this.state.eventName,
        loacation: this.state.eventLocation,
        date: this.state.eventLocation
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
              onClick={this.handleFieldChange}
              id="eventName"
              placeholder="Event name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="newLocationt">Edit Location</label>
            <input
              type="text"
              required
              className="form-control"
              onClick={this.handleFieldChange}
              id="eventLocation"
              placeholder="Event Location"
              thi
            />
          </div>
          <div className="form-group">
            <label htmlFor="newDate">Edit Date</label>
            <input
              type="date"
              required
              className="form-control"
              onClick={this.handleFieldChange}
              id="eventDate"
              placeholder="Event Date"
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

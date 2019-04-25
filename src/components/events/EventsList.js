import React, { Component } from "react";
import "./events.css";

export default class EventsList extends Component {
  render() {
    let currentId = sessionStorage.getItem("userId");
        currentId = parseInt(currentId)
const currentEvents = this.props.events.filter(event => event.userId === currentId)
    return (
      <React.Fragment>
        <div className="eventButton">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/events/new");
            }}
          >
            Please Add Event you like!
          </button>
        </div>

        <article className="events">
          {currentEvents.map(event => (
            <div key={event.id} className="card">
              <div className="card-body">
                <section className="card-title">
                  <h5> {event.name}</h5>
                  <h6>{event.location}</h6>
                  <p>{event.date}</p>
                  <button
                    onClick={() => this.props.deleteEvent(event.id)}
                    className="card-delete"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      this.props.history.push(`/events/${event.id}/edit`)}
                    className="card-edit"
                  >
                    Update
                  </button>
                </section>
              </div>
            </div>
          ))}
        </article>
      </React.Fragment>
    );
  }
}

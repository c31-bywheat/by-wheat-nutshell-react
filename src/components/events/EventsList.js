import React, { Component } from "react";
import "./events.css";

export default class EventsList extends Component {
  render() {
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
            Add Event
          </button>
        </div>

        <article className="events">
          {this.props.events.map(event => (
            <div key={event.id} className="card">
              <div className="card-body">
                <section className="card-title">
                  <h5> {event.name}</h5>
                  <h6>{event.location}</h6>
                  <p>{event.date}</p>
                  <button
                    onClick={() => this.props.deleteEvent(event.id)}
                    className="card-link"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      this.props.history.push(`/events/${event.id}/edit`)}
                    className="card-link"
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

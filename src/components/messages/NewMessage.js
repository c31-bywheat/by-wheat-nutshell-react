import React, { Component } from "react";
import "./Messages.css"



export default class NewMessage extends Component {

    // Set initial state
    state = {
        meessage: ""
    }

// Change state when editing input field
    handleFieldChange = (event) => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        console.log(stateToChange)
        this.setState(stateToChange);
      };


      makeNewMessage = evt => {
        evt.preventDefault();
        if (this.state.message === "") {
          window.alert("Please enter a message.");
        } else {
          const message = {
            message: this.state.message,
          };

     
          this.props
            .postMessage(message)

        }
      }

      render() {
        return (
            <React.Fragment>
                <div className="messages">
                    {
                        this.props.messages.map(message =>
                            <div key={message.id} className="card">
                            {message.message}
                            <button
                                            onClick={() => this.props.deleteMessage(message.id)}
                                            className="deleteButton">Delete</button>
                            <button
                                            onClick={() => this.props.history.push(`/messages/${message.id}/edit`)}
                                            className="editButton">Edit</button>
                            </div>

                            )
                    }
                </div>

            <form className="messageForm">
              <div className="form-group">
                <label htmlFor="message">New Message</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="message"
                  placeholder="New Message"
                />
              </div>
              <button
            type="submit"
            onClick={this.makeNewMessage}
            className="submitButton btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }


}
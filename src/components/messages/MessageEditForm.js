import React, { Component } from "react"
import MessageManager from "../../modules/MessageManager"


export default class MessageEditForm extends Component {
    state = {
        message: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingMessage = evt => {
        evt.preventDefault()

        if(this.state.message === "") {
            window.alert("Please Enter Message")
        } else {
            const editedMessage = {
                id: this.props.match.params.messageId,
                message: this.state.message
            };
            console.log(editedMessage)
        this.props.editMessage(editedMessage)
        .then(() => this.props.history.push("/messages")) 
        }
    }

    componentDidMount() {
        MessageManager.getOneMessage(this.props.match.params.messageId)
        .then(message => {
          this.setState({
            message: message.message           
          });
        });
      }

      render() {
        return (
          <React.Fragment>
            <form className="messageForm">
              <div className="form-group">
                <label htmlFor="newMessage">New Message</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="message"
                  value = {this.state.message}
                />
              </div>

              <button
                type="submit"
                onClick={this.updateExistingMessage}
                className="btn btn-primary"
              >
                Update
              </button>
            </form>
          </React.Fragment>
        );
      }
}










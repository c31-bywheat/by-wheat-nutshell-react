import { Route } from "react-router-dom";
import React, { Component } from "react";
// import EventsList from "./events/EventsList"
import EventManager from "../modules/EventManager";
import MessageList from "./messages/MessageList";
import MessageManager from "../modules/MessageManager"
import NewMessage from "./messages/NewMessage"



export default class ApplicationViews extends Component {


  state = {
    "users": [],
    "messages": [],
    "articles": [],
    "friends": [],
    "tasks": [],
    "events": []
   }

   componentDidMount() {
    MessageManager.getAllMessages().then(allMessages => {
      this.setState({
        messages: allMessages
        
      })
    })

    EventManager.getAll().then(events => {
      this.setState({
        events: events
      })
    })
  }
              deleteMessage = (id) => {
                return MessageManager.deleteMessage(id)
                .then(messages => this.setState({
                  messages: messages
                }))
              }

              postMessage = (message) => {
                return MessageManager.postMessage(message)
                .then(() => MessageManager.getAllMessages())
                .then(messages =>
                  this.setState({
                    messages:messages
                  })
                  )
              }
  

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/login" render={props => {
            return null
            // Remove null and return the component which will handle authentication
          }}
        />

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return <NewMessage messages={this.state.messages} deleteMessage={this.deleteMessage}
            postMessage={this.postMessage} makeNewMessage={this.makeNewMessage}/>
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/events" render={props => {
            return null
            // Remove null and return the component which will show the user's events
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />
        {/* <Route path="/messages/new" render={(props) => {
                    return <NewMessage {...props}
                        makeNewMessage={this.makeNewMessage} />
                }} /> */}

      </React.Fragment>
    );
  }
}

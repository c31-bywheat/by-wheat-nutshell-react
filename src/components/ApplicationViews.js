import { Route } from "react-router-dom";
import React, { Component } from "react";
import NewsList from "./news/NewsList";
import NewsManager from "../modules/NewsManager";
import EventsList from "./events/EventsList";
import EventManager from "../modules/EventManager";
import MessageList from "./messages/MessageList";
import MessageManager from "../modules/MessageManager"




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
    MessageManager.getAll().then(allMessages => {
      this.setState({
        messages: allMessages

      })
    })
     EventManager.getAll().then(events => {
       this.setState({
         events: events
       })
     })
     NewsManager.getAllNews().then(allNews => {
      this.setState({
          articles: allNews
      })

    })
  }

  deleteNews = (id) => {
      return NewsManager.removeAndListNews(id)
      .then(articles => this.setState({
          articles: articles
        })
      )

   }


  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/login" render={(props) => {
            return null
            // Remove null and return the component which will handle authentication
          }}
        />

        <Route
          exact path="/" render={props => {
            return <NewsList deleteNews={this.deleteNews}
            articles={this.state.articles} />
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
            return <MessageList messages={this.state.messages} deleteMessage={this.deleteMessage}/>
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

      </React.Fragment>
    );
  }
}

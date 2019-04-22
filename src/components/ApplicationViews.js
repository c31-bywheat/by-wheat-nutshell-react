import { Route } from "react-router-dom";
import React, { Component } from "react";
import NewsList from "./news/NewsList";
import NewsManager from "../modules/NewsManager"

export default class ApplicationViews extends Component {

  state = {
    events: [],
    articles: [],
    tasks: [],
    messages: [],
    friends: [],
    users: []

}

componentDidMount() {

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
            return null
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

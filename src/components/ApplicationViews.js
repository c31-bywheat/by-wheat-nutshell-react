import { Route } from "react-router-dom";
import React, { Component } from "react";
import NewMessage from "./messages/NewMessage"
import NewsList from "./news/NewsList";
import NewsManager from "../modules/NewsManager";
import EventsList from "./events/EventsList";
import EventsForm from "./events/EventsForm"
import EventEditForm from "./events/EventEditForm"
import EventManager from "../modules/EventManager";
import MessageManager from "../modules/MessageManager"
import NewsForm from "../components/news/NewsForm"
import MessageEditForm from "./messages/MessageEditForm"
import TaskList from './tasks/TaskList'
import TaskManager from '../modules/TaskManager'




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
    EventManager.getAllEvent().then(event => {
      this.setState({
        events: event
      })
    })
    NewsManager.getAllNews().then(allNews => {
      this.setState({
        articles: allNews
      })

    })
    TaskManager.getAll().then(tasks => {
      this.setState({
        tasks: tasks
      })
    })
  }



  editMessage = (editedMessage) => {
    return MessageManager.putMessage(editedMessage)
      .then(() => MessageManager.getAllMessages())
      .then(messages => {
        this.setState({
          messages: messages
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


  deleteNews = (id) => {
    return NewsManager.removeAndListNews(id)
      .then(articles => this.setState({
        articles: articles
      })
      )

  }
  deleteEvent = (id) => {
    return EventManager.deleteEvent(id)
      .then(events =>
        this.setState({ events: events })
      )
  }
  postEvent = (newEvents) => {
    return EventManager.postEvent(newEvents)
      .then(() => EventManager.getAllEvent())
      .then(events =>
        this.setState({
          events: events
        })
      );
  }
    editEvent = (editedEvents) => {
      return EventManager.putEvent(editedEvents)
      .then(()=> EventManager.getAllEvent())
      .then(events =>{
        this.setState({
          events: events
        })
      })
    }

   addNews = news => {
    return NewsManager.post(news)
    .then(() => NewsManager.getAllNews())
    .then(articles =>
      this.setState({
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
            return <NewsList {...props}
            deleteNews={this.deleteNews}
            addNews={this.addNews}
            articles={this.state.articles} />
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          exact path="/articles/new" render={props => {
            return <NewsForm {...props} articles={this.state.articles}
            addNews={this.addNews} />
          }
        }
        />
        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          exact path="/messages" render={props => {
            return <NewMessage {...props} messages={this.state.messages} deleteMessage={this.deleteMessage}
              postMessage={this.postMessage} makeNewMessage={this.makeNewMessage} />
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          exact path="/events" render={props => {
            return (
              // Remove null and return the component which will show the user's events
              <EventsList {...props} deleteEvent={this.deleteEvent} events={this.state.events} />
            )
          }}
        />
        <Route path="/events/new" render={(props) => {
          return <EventsForm {...props}
            postEvent={this.postEvent}
            events={this.state.events} />
        }} />
        <Route
          path="/event/:eventId(\d+)/edit" render={props => {
            return<EventEditForm {...props} editEvent={this.editEvent} events={this.state.events} />
          }}
          />

        <Route
          path="/tasks" render={props => {
            return <TaskList tasks={this.state.tasks} />
            // Remove null and return the component which will show the user's tasks
          }}
        />
        <Route
          path="/messages/:messageId(\d+)/edit" render={props => {
            return <MessageEditForm {...props} messages={this.state.messages} editMessage={this.editMessage} />
          }}
        />

      </React.Fragment>
    );
  }
}
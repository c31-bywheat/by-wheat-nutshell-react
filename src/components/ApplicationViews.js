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
import EditNewsForm from "./news/EditNewsForm"
import Login from "./Authentication/Login"
import { Route, Redirect } from "react-router-dom"
import TaskList from './tasks/TaskList'
import TaskManager from '../modules/TaskManager'
import RegisterForm from "./Authentication/Register"
import UserManager from "../modules/UserManager"
import TaskForm from "./tasks/TaskForm"
import TaskEditor from "./tasks/TaskEditor"
export default class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("userId") !== null
  state = {
    "users": [],
    "messages": [],
    "articles": [],
    "friends": [],
    "tasks": [],
    "events": []
  }
  componentDidMount() {
    MessageManager.getAllMessages().then(messages => {
      this.setState({
        messages: messages
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
    TaskManager.getAllTasks().then(tasks => {
      this.setState({
        tasks: tasks
      })
    })
    UserManager.getAllUsers().then(users => {
      this.setState({
        users: users
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
              postUser = (newUser) => {
                return UserManager.postUser(newUser)
                
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
              editMessage = (editedMessage) => {
                return MessageManager.putMessage(editedMessage)
                .then(() => MessageManager.getAllMessages())
                .then(messages => {
                  this.setState({
                    messages: messages
                  })
                });
              };
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
   editNews = (editedNews) => {
    return NewsManager.putNews(editedNews)
    .then(() => NewsManager.getAllNews())
    .then(articles => {
      this.setState({
        articles: articles
      })
    });
  };
  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/login" render={props => {
            return <Login users={this.state.users} {...props} postUser={this.postUser} getAllUsers={this.getAllUsers} />
          }}
        />
        <Route 
           path="/register" render={props => {
             return <RegisterForm users={this.state.users} {...props} postUser={this.postUser}/>
           }}
        />
        <Route
          exact path="/" render={props => {
            if(this.isAuthenticated()) {
            return <NewsList {...props}
            deleteNews={this.deleteNews}
            addNews={this.addNews}
            articles={this.state.articles}/>
          } else {
            return <Redirect to="/login"/>
          }
        }}
        />
        <Route
          exact path="/articles/new" render={props => {
            if(this.isAuthenticated()) {
            return <NewsForm {...props} articles={this.state.articles}
            addNews={this.addNews} />
          } else {
            return <Redirect to="/login"/>
          }
        }}
        />
        <Route
          path="/articles/:articleId(\d+)/edit" render={props => {
            return <EditNewsForm {...props} articles={this.state.articles} editNews={this.editNews}/>
         }}
        />
        <Route
          path="/friends" render={props => {
            if(this.isAuthenticated()) {
            return null
            // Remove null and return the component which will show list of friends
          }else {
            return <Redirect to="/login"/>
          }
        }
        }
        />
        <Route
          exact path="/messages" render={props => {
            if(this.isAuthenticated()) {
            return <NewMessage {...props}  messages={this.state.messages} deleteMessage={this.deleteMessage}
              postMessage={this.postMessage} makeNewMessage={this.makeNewMessage} />
            // Remove null and return the component which will show the messages
          }else {
            return <Redirect to="/login"/>
          }
        }}
        />
        <Route
         exact path="/events" render={props => {
            if(this.isAuthenticated()) {
              return (
                // Remove null and return the component which will show the user's events
                <EventsList {...props} deleteEvent={this.deleteEvent} events={this.state.events} />
              )
          }else {
            return <Redirect to="/login"/>
          }
        }}
        />
        <Route path="/events/new" render={(props) => {
          return <EventsForm {...props}
            postEvent={this.postEvent}
            events={this.state.events} />
        }} />
        <Route
          path="/events/:eventId(\d+)/edit" render={props => {
            return <EventEditForm {...props} editEvent={this.editEvent} events={this.state.events} />
          }}
          />
                    <Route
                    path="/tasks" render={props => {
                        return <TaskList  {...props} deleteTask={this.deleteTask} tasks={this.state.tasks} />
                    }}
                />
                <Route
                    exact path="/tasks/new" render={props => {
                        return <TaskForm {...props}
                            addTask={this.addTask}
                            tasks={this.state.tasks} />
                    }}
                />
                <Route
                    path="/tasks/:taskId(\d+)/edit" render={props => {
                        return <TaskEditor {...props} tasks={this.state.tasks} editTask={this.editTask} />
                    }}
                />
        <Route
          path="/messages/:messageId(\d+)/edit" render={props => {
            if(this.isAuthenticated()) {
            return <MessageEditForm {...props} messages={this.state.messages} editMessage={this.editMessage}/>
            } else {
              return <Redirect to="/login"/>
            }
          }}
          />
      </React.Fragment>
    );
  }
}
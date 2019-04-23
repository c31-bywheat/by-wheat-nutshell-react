import React, { Component } from "react";
import NewMessage from "./messages/NewMessage"
import NewsList from "./news/NewsList";
import NewsManager from "../modules/NewsManager";
// import EventsList from "./events/EventsList";
import EventManager from "../modules/EventManager";
import MessageManager from "../modules/MessageManager"
import NewsForm from "../components/news/NewsForm"
import MessageEditForm from "./messages/MessageEditForm"
import Login from "./Authentication/Login"
import { Route, Redirect } from "react-router-dom"



export default class ApplicationViews extends Component {

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

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
     NewsManager.getAllNews().then(allNews => {
      this.setState({
          articles: allNews
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
          exact path="/login" render={props => {
            return <Login users={this.state.users} {...props}/>
           
          }}
        />
        
        <Route
          exact path="/" render={props => {
            if(this.isAuthenticated()) {
            return <NewsList {...props}
            deleteNews={this.deleteNews}
            addNews={this.addNews}
            articles={this.state.articles} />
           
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
            return <NewMessage {...props} messages={this.state.messages} deleteMessage={this.deleteMessage}
            postMessage={this.postMessage} makeNewMessage={this.makeNewMessage}/>
            // Remove null and return the component which will show the messages
          }else {
            return <Redirect to="/login"/>
          }
        }}
        />

        <Route
          path="/events" render={props => {
            if(this.isAuthenticated()) {
            return null
            // Remove null and return the component which will show the user's events
          }else {
            return <Redirect to="/login"/>
          }
        }}
        />

        <Route
          path="/tasks" render={props => {
            if(this.isAuthenticated()) {
            return null
            // Remove null and return the component which will show the user's tasks
          } else {
            return <Redirect to="/login"/>
          }
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
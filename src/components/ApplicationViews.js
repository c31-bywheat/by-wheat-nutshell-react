import { Route } from "react-router-dom";
import React, { Component } from "react";
import NewMessage from "./messages/NewMessage"
import NewsList from "./news/NewsList";
import NewsManager from "../modules/NewsManager";
// import EventsList from "./events/EventsList";
import EventManager from "../modules/EventManager";
import MessageManager from "../modules/MessageManager"
import NewsForm from "../components/news/NewsForm"
import MessageEditForm from "./messages/MessageEditForm"
import EditNewsForm from "./news/EditNewsForm"



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
            articles={this.state.articles}
            // editNews={this.editNews}
             />
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
          path="/articles/:articleId(\d+)/edit" render={props => {
            return <EditNewsForm {...props} articles={this.state.articles} editNews={this.editNews}/>
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
            return <NewMessage {...props} messages={this.state.messages} deleteMessage={this.deleteMessage}
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
        <Route
          path="/messages/:messageId(\d+)/edit" render={props => {
            return <MessageEditForm {...props} messages={this.state.messages} editMessage={this.editMessage}/>
            }}
          />

      </React.Fragment>
    );
  }
}

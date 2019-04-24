import React, { Component } from "react"
import NewsManager from "../../modules/NewsManager"

export default class EditNewsForm extends Component {

state = {
    title:"",
    synopsis:"",
    url:""
}

handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

updateExistingNews = evt => {
    evt.preventDefault()

    if (this.state.title === "") {
      window.alert("Please add title");
    } else {
      const editedNews = {
        id: this.props.match.params.articleId,
        title: this.state.title,
        synopsis: this.state.synopsis,
        url: this.state.url
      };
  this.props.editNews(editedNews)
  .then(() => this.props.history.push("/"))
  }
}

componentDidMount() {
    NewsManager.getOneArticle(this.props.match.params.articleId)
    .then(article => { console.log(article)
      this.setState({
        title: article.title,
        synopsis: article.synopsis,
        url: article.url
      });
    });
  }

render() { console.log(this.props.articles)
    return (
      <React.Fragment>
        <form className="NewsForm">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="title"
              value = {this.state.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="synopsis">Synopsis</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="synopsis"
              value= {this.state.synopsis}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="url"
              value= {this.state.url}
            />
          </div>
          <button
            type="submit"
            onClick={this.updateExistingNews}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
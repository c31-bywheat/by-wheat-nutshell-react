import React, { Component } from "react";

export default class NewsForm extends Component {
    // Set initial state
    state = {
      title: "",
      synopsis: "",
      url: ""
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
      const stateToChange = {};
      stateToChange[evt.target.id] = evt.target.value;
      this.setState(stateToChange);
    };

    constructNewNews = evt => {
        evt.preventDefault();
        const news = {
        title: this.state.title,
        synopsis: this.state.synopsis,
        url: this.state.url

    }
    this.props
        .addNews(news)
    .then(() => this.props.history.push("/"))
}


    render() {
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
                  placeholder="newsTitle"
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
                  placeholder="newsSynopsis"
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
                  placeholder="newsUrl"
                />
              </div>
              <button
                type="submit"
                onClick={this.constructNewNews}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </React.Fragment>
        );
      }
    }
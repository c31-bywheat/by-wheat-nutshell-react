import React, { Component } from "react";
import "../news/News.css"

export default class NewsList extends Component {
    render () {
        return (
         <article className="header">
            <h1>News</h1>
            <div className="NewsButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/articles/new")}
                            }>
                        Add News
                    </button>
                </div>
                <section className="content News">
            {
                this.props.articles.map(article =>
                    <div key={article.id} >
                        <div className="card-body">
                        <section className="card-title">
                        <h5>{article.title}</h5>
                        <p>{article.synopsis}</p>
                        <p><a href={`http://${article.url}`} target="_blank" rel="noopener noreferrer">{article.url}</a></p>
                        <p className="timestamp">{article.timestamp}</p>
                                <button
                                    onClick={() => this.props.deleteNews(article.id)}
                                    className="card-delete">Delete</button>
                                <button
                                    onClick={() => this.props.history.push(`/articles/${article.id}/edit`)}
                                    className="card-edit">Edit</button>
                            </section>
                        </div>
                    </div>
                )
            }
            </section>
            </article>
            )
        }
    }

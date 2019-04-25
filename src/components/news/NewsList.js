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
                    <div key={article.id} className="card">
                        <div className="card-body">
                        <h5 className="card-title">
                        <h3>{article.title}</h3>
                        <p>{article.synopsis}</p>
                        <p><a href={`http://${article.url}`} target="_blank">{article.url}</a></p>
                        <p className="timestamp">{article.timestamp}</p>
                                <button
                                    onClick={() => this.props.deleteNews(article.id)}
                                    className="card-delete">Delete</button>
                                <button
                                    onClick={() => this.props.history.push(`/articles/${article.id}/edit`)}
                                    className="card-edit">Edit</button>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
            </article>
            )
        }
    }

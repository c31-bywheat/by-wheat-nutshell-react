import React, { Component } from "react";
import "../news/News.css"

export default class NewsList extends Component {
    render () {
        let currentId = sessionStorage.getItem("userId");
        currentId = parseInt(currentId)
const currentArticles = this.props.articles.filter(article => article.userId === currentId)
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
                
                currentArticles.map(article =>
                    
                    <div key={article.id} className="card">
                        <div className="card-body"> {article.title}
                        {article.synopsis} {article.url}{article.timestamp}
                            <h5 className="card-title">
                                <button
                                    onClick={() => this.props.deleteNews(article.id)}
                                    className="card-link">Delete</button>
                                <button
                                    onClick={() => this.props.history.push(`/articles/${article.id}/edit`)}
                                    className="editButton">Edit</button>
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

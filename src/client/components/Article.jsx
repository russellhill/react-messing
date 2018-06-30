import React, { Component } from 'react';

class Article extends Component {
    render() {
        const { article } = this.props;
        return (
            <li className="cards__item">
                <div className="card">
                    <div className="card__image">
                        <img src={article.Image['small-phone']} srcSet={`${article.Image['small-phone']} 640w, ${article.Image['medium-phone']} 960w, ${article.Image.tablet} 1440w, ${article.Image.tablet} 1600w`} sizes="(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1440px) 1440px, 1600px" alt={article.Title} />
                    </div>
                    <div className="card__content">
                        <div className="card__title">
                            {article.Title}<br/>
                            <span className="card__title--author">
                                by {article.Author.Name} ({article.Author.JobTitle})
                            </span>
                        </div>
                        <p className="card__text">
                            {article.SnippetText}<br/>
                            <div dangerouslySetInnerHTML={{ __html: article.Copy }} />
                        </p>
                        <button className="btn btn--block card__btn">More</button>
                    </div>
                </div>
            </li>
        );
    }
}

export default Article;

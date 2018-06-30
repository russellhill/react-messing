import React, { Component } from 'react';

class Article extends Component {
    render() {
        const { article } = this.props;
        return (
            <li className="cards__item">
                <div className="card">
                    <div className="card__image">
                        <picture>
                            <source media="(max-width: 640px)" srcSet={article.Image['small-phone']} />
                            <source media="(max-width: 960px)" srcSet={article.Image['medium-phone']} />
                            <source media="(max-width: 1440px)" srcSet={article.Image.tablet} />
                            <source media="(max-width: 1600px)" srcSet={article.Image.desktop} />
                            <img src={article.Image.desktop} alt={article.title} />
                        </picture>
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

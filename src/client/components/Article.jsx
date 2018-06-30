import React, { Component } from 'react';

class Article extends Component {
    render() {
        const { article } = this.props;
        return (
            <div key={article.id} class="item">
                <div class="item-img">
                    <img src={article.Image['small-phone']} srcSet={`${article.Image['small-phone']} 640w, ${article.Image['medium-phone']} 960w, ${article.Image.tablet} 1440w, ${article.Image.tablet} 1600w`} alt={article.Title} />
                </div>
                <div class="item-desc">
                    <p class="item-heading">
                        {article.Title}<br/>
                        <span class="item-author">
                            by {article.Author.Name} ({article.Author.JobTitle})
                        </span>
                    </p>
                    <p>
                        {article.SnippetText}
                    </p>
                    <a href="#">
                        Read More
                    </a>
                </div>
            </div>
        );
    }
}

export default Article;

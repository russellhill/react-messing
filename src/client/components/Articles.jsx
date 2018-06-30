import React, { Component } from 'react';
import Article from './Article.jsx';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            fetchError: false,
        };
    }

    componentDidMount() {
        fetch('/1/articles')
            .then(results => results.json())
            .then((articles) => {
                this.setState({ articles });
            })
            .catch(() => {
                this.setState({ fetchError: true });
            });
    }

    render() {
        const { articles } = this.state;
        const { fetchError } = this.state;

        if (fetchError) {
            return (
                <div className="error">
                    Error fetching data :(
                </div>
            );
        }
        return (
            <ul className="cards">
                {articles.map(article => <Article article={article} />)}
            </ul>
        );
    }
}

export default Articles;

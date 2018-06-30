import React, { Component } from 'react';
import Article from './Article.jsx';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/articles')
            .then(results => results.json())
            .then((articles) => {
                this.setState({ articles });
            });
    }

    render() {
        const { articles } = this.state;
        return (
            <div>
                {articles.map(article => <Article article={article} />)}
            </div>
        );
    }
}

export default Articles;

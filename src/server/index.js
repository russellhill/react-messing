const express = require('express');
const app = express();
const request = require('request-promise');
const path = require('path');

app.use(express.static(path.join(__dirname, './../../')));

app.get('/articles', (req, res) => {
    const authorOptions = {
        method: 'GET',
        uri: 'http://localhost:4567/authors',
        json: true,
    };
    const articleOptions = {
        method: 'GET',
        uri: 'http://localhost:4567/articles',
        json: true,
    };

    Promise.all([request(authorOptions), request(articleOptions)])
        .then((results) => {
            const authorData = results[0];
            const articleData = results[1];

            const processedArticles = articleData.map((article) => {
                const authorId = article.Author;
                article.Author = authorData.find(author => author.id === authorId);
                return article;
            });

            res.status(200);
            res.send(processedArticles);
        })
        .catch((error) => {
            res.status(500);
            res.send({ status: 500, description: 'error fetching article data', error });
        });
});

app.listen(3000);

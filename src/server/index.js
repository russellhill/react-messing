const express = require('express');
const app = express();
const request = require('request-promise');
const path = require('path');

app.use(express.static(path.join(__dirname, './../../')));

function fetchAllData() {
    return new Promise((resolve, reject) => {
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

        // fetch both the authors and the articles at the same time
        // then process the articles by looking up the author details
        // and replace the existing article author with the full author
        // details
        Promise.all([request(authorOptions), request(articleOptions)])
            .then((results) => {
                const authorData = results[0];
                const articleData = results[1];

                const processedArticles = articleData.map((article) => {
                    const authorId = article.Author;
                    article.Author = authorData.find(author => author.id === authorId);
                    return article;
                });

                resolve(processedArticles);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

app.get('/:version/articles', (req, res) => {
    fetchAllData()
        .then((processedArticles) => {
            res.status(200);
            res.send(processedArticles);
        })
        .catch((error) => {
            res.status(500);
            res.send({ status: 500, description: 'error fetching article data', error });
        });
});

app.get('/:version/articles/taxonomy/:taxonomy', (req, res) => {
    const taxonomyParam = req.params.taxonomy;
    fetchAllData()
        .then((processedArticles) => {
            const filteredArticles = processedArticles.filter(article => (article.Taxonomy === taxonomyParam));
            res.status(200);
            res.send(filteredArticles);
        })
        .catch((error) => {
            res.status(500);
            res.send({ status: 500, description: 'error fetching article data', error });
        });
});

app.get('/:version/articles/author/:authorid', (req, res) => {
    const authorIdParam = req.params.authorid;
    fetchAllData()
        .then((processedArticles) => {
            const filteredArticles = processedArticles.filter(article => (article.Author.id === authorIdParam));
            res.status(200);
            res.send(filteredArticles);
        })
        .catch((error) => {
            res.status(500);
            res.send({ status: 500, description: 'error fetching article data', error });
        });
});

app.listen(3000);

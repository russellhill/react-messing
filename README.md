# Messing around with React
Not used React before, so suspect there is much wrong with this initial code!

## Purpose
The purpose of this code is to:

* test out `webpack`, `React`, `Node`+`Express` in a project
* have the React app request "feed" data from a Node API endpoint (that in turns fetches data from a dummy JSON endpoint and munges the data before returning it)
* display the data using React - the feed is a dummy feed of "articles" - in a way that uses a couple of React components
* try out some `BEM notation` in the CSS
* build a responsive website that handles multiple image sizes (for different devices)
* write some simple tests to test the React component code

## Running the project

You will need two terminal sessions for this.

In one session:

* clone the repo
* `cd` into the directory
* `npm install`
* `npm start`

(the Node process and the dummy JSON db server will start)

In the other session:

* `cd` into the directory
* `npm run webpack`

(webpack will package the data and then start monitoring files for changes to the code, in which case it repacks the code)

In a browser window, browse to: `http://localhost:3000`

## Run the tests

In order to run the simple tests that have been added, in a termninal session:

* `cd` into the directory containing the project
* `npm run test`

(the tests will run)

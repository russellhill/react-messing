import React, { Component } from 'react';
import Articles from './Articles.jsx';

class App extends Component {
    render() {
        return (
            <div id="container">
                <div id="card-container">
                    <div class="col-wrapper">
                        <div class="col col-1">
                            <Articles />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

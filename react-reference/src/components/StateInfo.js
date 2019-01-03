import React, { Component } from 'react';


class StateInfo extends Component {
    render() {
        return (
            <div className="info">
                <h1>State</h1>
                <p>Properties are defined when components are created, whether by
                     JSX or by pure JavaScript. State, on the other hand, is only
                     seen on the inside of component definitions. This is the first,
                     and most important difference between the two.</p>
            </div>
        )
    }
}

export default StateInfo; 
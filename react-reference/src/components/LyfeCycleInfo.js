import React, { Component } from 'react';


class LyfeCycleInfo extends Component {
    render() {
        return (
            <div className="info">
                <h1>Lyfe Cycle</h1>
                <p> props are immutable. This is why the container component should
                    define the state that can be updated and changed, while the child
                    components should only pass data from the state using props.</p>
            </div>
        )
    }
}

export default LyfeCycleInfo; 
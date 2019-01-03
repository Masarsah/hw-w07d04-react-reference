import React, { Component } from 'react';
import PropsInfo from './PropsInfo'
import StateInfo from './StateInfo'
import LyfeCycleInfo from './LyfeCycleInfo'

class ComponentInfo extends Component {
    render() {
        return (
            <div className='componentInfo'>
            <h1>Component</h1>
                <div className='com'><PropsInfo /></div>
                <div className='com'><StateInfo /></div>
                <div className='com'><LyfeCycleInfo /></div>
            </div>
        )
    }
}

export default ComponentInfo; 
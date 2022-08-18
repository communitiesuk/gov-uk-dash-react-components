import React, { Component } from 'react';

import { defaultProps, propTypes } from '../components/ComponentTemplate.react';

class Team2 extends Component {
    constructor(props) {
        super(props);
        this.state = {clicks: props.clicks 
        }}
    update_clicks = () => {
        // update the state!
        this.setState({
            clicks: this.state.clicks+1
        })
        }
    render() {
        let date = new Date()
        return (
            <div id={this.props.id}>
                {(date.toLocaleTimeString())}
                <button onClick={() => this.update_clicks()}>
                    You have clicked {this.state.clicks} times
                </button>
            </div>
        )
    }
}

Team2.defaultProps = defaultProps;
Team2.propTypes = propTypes;

export default Team2
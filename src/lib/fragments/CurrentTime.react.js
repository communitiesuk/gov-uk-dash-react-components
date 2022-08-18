import React, { Component } from 'react';

import { defaultProps, propTypes } from '../components/CurrentTime.react';


class CurrentTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: this.props.value
        }
      }

    handleInputChange = (e) => {
        // update the state!
        this.setState({
        value: this.state.value + 1
        })
    }

    render() {
        const today = new Date();
        const time = today.getHours() + 1 + ":" + today.getMinutes() + ":" + today.getSeconds();
        const counter = this.state.value
        return (
            <div id={this.props.id}>
                {time}
                <br/>
                <button onClick={this.handleInputChange}>Click Me!</button>
                <br/>
                {counter}
            </div>
        )
    }
}

CurrentTime.defaultProps = defaultProps;
CurrentTime.propTypes = propTypes;

export default CurrentTime
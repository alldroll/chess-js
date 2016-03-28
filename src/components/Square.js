import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {x, y} = this.props;
        const black = (x + y) % 2;
        return (<div className={'square ' + (black ? 'black' : 'white')}/>);
    }
}

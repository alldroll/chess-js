import React, { Component, PropTypes} from 'react';
import { TeamT, FigureT } from '../constants/base';

const TeamTEnum = Object.keys(TeamT).map((k) => TeamT[k]);
const FigureTEnum = Object.keys(FigureT).map((k) => FigureT[k]);

export default class Figure extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let symbol = this.props.symbol;
        let isActive = this.props.isActive;

        return (
            <div style={ {display: 'inline-block'} }>
                {symbol}
            </div>
        );
    }
}

Figure.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    team: PropTypes.oneOf(TeamTEnum),
    type: PropTypes.oneOf(FigureTEnum),
    symbol: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
};

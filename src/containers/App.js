import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Chess from '../components/Chess'

function mapStateToProps(state) {
    return {
        figures: state.figures.map(f => {
            f.isActive = f.team === state.turn;
            return f;
        }),
        turn: state.turn
    };
}

function mapDispatchToProps(dispatch) {
    //return bindActionCreators(CounterActions, dispatch)
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Chess);

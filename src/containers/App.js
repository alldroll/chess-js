import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Chess from '../components/Chess';
import * as actions from '../actions';


function mapStateToProps(state) {
    return state;
    /*{
        figures: state.figures.map(f => {
            f.isActive = f.team === state.turn;
            return f;
        }),
        turn: state.turn
    };*/
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chess);

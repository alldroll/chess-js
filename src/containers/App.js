import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Chess from '../components/Chess'

function mapStateToProps(state) {
    return {
        test: state.test
    };
}

function mapDispatchToProps(dispatch) {
    //return bindActionCreators(CounterActions, dispatch)
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Chess);

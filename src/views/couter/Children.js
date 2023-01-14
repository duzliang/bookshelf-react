import React from "react";
import PropTypes from 'prop-types';
import connect from "./connect";

class Children extends React.Component {
  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={() => this.props.AddOne()}>add 1</button>
        <button onClick={() => this.props.MultiThree()}>multi 3</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    AddOne: () => {
      dispatch({ type: 'AddOne' })
    },
    MultiThree: () => {
      dispatch({ type: 'MultiThree' })
    }
  }
}

Children.propTypes = {
  count: PropTypes.number,
  AddOne: PropTypes.func,
  MultiThree: PropTypes.func,
}

export default connect(mapStateToProps)(mapDispatchToProps)(Children);

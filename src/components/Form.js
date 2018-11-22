import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleChangeName } from '../actions/index';

class Form extends Component {
  handleChangeName = (e) => {
    const name = e.target.value;
    this.props.actions.handleChangeName(name);
  };

  render() {
    const { name } = this.props;
    return (
      <div className="form-container">
        <p>Your Name: { name }</p>
        <input type="text" onChange={ this.handleChangeName } />        
      </div>
    )
  }
}

export default connect(
  state => ({
    name: state.form.name,
  }),
  dispatch => ({
    actions: bindActionCreators({ handleChangeName }, dispatch)
  })
)(Form);
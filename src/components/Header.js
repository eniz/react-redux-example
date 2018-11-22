import React, { Component } from 'react'
import { connect } from "react-redux";
import logo from '../logo.svg';

class Header extends Component {
  render() {
    const { name } = this.props;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello <strong>{ name }</strong>
        </p>
      </header>
    )
  }
}

export default connect(
  state => ({
    name: state.formReducer.name,
  })
)(Header);
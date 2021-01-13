import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createMessage } from '../actions';


class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    this.box.focus();
  }

  componentDidUpdate() {
    this.box.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    // console.log(this.state.value);
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline">
        <input
          type="text"
          value={this.state.value}
          className="form-control"
          onChange={this.handleChange}
          ref={(input) => { this.box = input; }}
        />
        <button type="submit" className="btn btn-danger">Send</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage }, dispatch);
}

export default connect(null, mapDispatchToProps)(MessageForm);

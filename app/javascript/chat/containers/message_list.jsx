import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import MessageForm from '../containers/message_form';

import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessagesFromSelectedChannel();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessagesFromSelectedChannel, 4000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
    // console.log(this.list.scrollTop);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessagesFromSelectedChannel = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="message-list">
        <div>
          <div className="channel-name">
            <h3><strong>Channel #{this.props.selectedChannel}</strong></h3>
          </div>
          <div className="messages" ref={(list) => { this.list = list; }} >
            {
              this.props.messages.map((message) => {
                return <Message key={message.id} message={message} />;
              })
            }
          </div>
        </div>
        <div className="message-box">
          <MessageForm />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

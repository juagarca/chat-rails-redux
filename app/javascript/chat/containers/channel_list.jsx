import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeChannel, fetchMessages } from '../actions';


class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.changeChannel(channel);
  }

  showChannel = (channel) => {
    const isSelectedChannel = channel === this.props.selectedChannel;
    return (
      <li
        key={channel}
        className={isSelectedChannel ? 'active-channel' : null}
        onClick={() => this.handleClick(channel)}
      >
        #{channel}
      </li>
    );
  }

  render() {
    // console.log(this.props.channels);
    return (
      <div className="channel-list">
        <h3><strong>Chat</strong></h3>
        <ul>
          {
            this.props.channels.map((channel) => {
              return this.showChannel(channel);
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeChannel: changeChannel,
      fetchMessages: fetchMessages,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

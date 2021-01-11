import React from 'react';
import { emojify } from 'react-emojione';

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(i) {
  const c = (i & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  return "00000".substring(0, 6 - c.length) + c;
}

const Message = (props) => {
  const time = new Date(props.message.created_at).toLocaleTimeString();
  const author = props.message.author;
  const hex = intToRGB(hashCode(author));
  return (
    <div className="message">
      <span style={{ color: `#${hex}` }}>{author}</span> -
      <em><small>{time}</small></em>
      <p>{emojify(props.message.content)}</p>
    </div>
  );
};

export default Message;

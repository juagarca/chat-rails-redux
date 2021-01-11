// TODO: add and export your own actions
const BASE_URL = 'https://wagon-chat.herokuapp.com';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';

export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then(response => response.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ author, content })
  }).then(response => response.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}

export function changeChannel(channel) {
  return {
    type: CHANGE_CHANNEL,
    payload: channel
  };
}

// TODO: add and export your own actions
const BASE_URL = '/api/v1/channels';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';

export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url, { credentials: "same-origin" })
  .then(response => response.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, content) {

  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;

  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: "same-origin",
    body: JSON.stringify({ content })
  }).then(response => response.json());
  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}

export function changeChannel() {
  return {
    type: CHANGE_CHANNEL
  };
}

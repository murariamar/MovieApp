const events = {};

export default {
  subscribe: (action, callback) => {
    if (!events[action]) {
      events[action] = [];
    }
    events[action].push(callback);
  },
  emit: (action, payload) => {
    if (events[action]) {
      events[action].map(callback => callback(payload));
    }
  }
};

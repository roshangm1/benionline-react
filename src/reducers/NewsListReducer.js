const INITIAL_STATE = {
  fetching: null,
  news: [],
  error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'fetch_data':
        return { ...state, fetching: true };
      case 'fetch_success':
        return { ...state, fetching: false, news: action.payload };
      case 'fetch_failed':
        return { ...state, fetching: false, error: 'Fetching new data failed' };
      default:
        return state;
    }
};

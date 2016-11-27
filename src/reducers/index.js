import { combineReducers } from 'redux';
import NewsListReducer from './NewsListReducer';

export default combineReducers({
  list: NewsListReducer
});

import organizations  from './organizations';
import subscriptions from './subscriptions';
// From redux
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  organizations,
  subscriptions
});

export default rootReducer;
import subscriptionReducer from './subscriptionReducer'
import { ADD_SUBSCRIPTION } from '../actions/subscriptionActions'
import { RENEW_SUBSCRIPTION } from '../actions/subscriptionActions'
import { CANCEL_SUBSCRIPTION } from '../actions/subscriptionActions'

const subscriptionsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_SUBSCRIPTION:
            return [
                ...state,
                subscriptionReducer(undefined, action)
            ]
        case RENEW_SUBSCRIPTION:
            return state.map(sub =>
                subscriptionReducer(sub, action)
            )
        case CANCEL_SUBSCRIPTION:
            return [
            ...state.slice(0,action.id),
            ...state.slice(action.id + 1)
            ]
        default:
            return state
    }
};

export default subscriptionsReducer
import { ADD_SUBSCRIPTION } from '../actions/subscriptionActions'
import { RENEW_SUBSCRIPTION } from '../actions/subscriptionActions'
import { CANCEL_SUBSCRIPTION } from '../actions/subscriptionActions'

const subscriptionReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_SUBSCRIPTION':
        case 'RENEW_SUBSCRIPTION':
        case 'CANCEL_SUBSCRIPTION':
        default:
            return state;
    }
};

export default subscriptionReducer;
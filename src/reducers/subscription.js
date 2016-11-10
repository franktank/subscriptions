import { ADD_SUBSCRIPTION } from '../actions/subscriptionActions'
import { RENEW_SUBSCRIPTION } from '../actions/subscriptionActions'
import { CANCEL_SUBSCRIPTION } from '../actions/subscriptionActions'

// How to handle status??

const subscriptionReducer = (state = {}, action) => {
    switch(action.type) {
        case ADD_SUBSCRIPTION:
            return {
                id: action.id,
                organizationID: action.oid,
                startDate: action.startDate,
                endDate: action.endDate,
                status: true
            }
        case RENEW_SUBSCRIPTION:
            if (state.id !== action.id) {
                return state
            }
            
            return Object.assign({}, state, {
                startDate: action.startDate,
                endDate: action.endDate,
                status: true
            })
        case CANCEL_SUBSCRIPTION:
        default:
            return state;
    }
};

export default subscriptionReducer;
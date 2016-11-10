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
                startDate: JSON.stringify(new Date()),
                endDate: JSON.stringify(new Date(new Date().getTime() + (30*24*60*60*1000))),
                status: true
            }
        case RENEW_SUBSCRIPTION:
            if (state.id !== action.id) {
                return state
            }
            
            return Object.assign({}, state, {
                startDate: JSON.stringify(new Date()),
                endDate: JSON.stringify(new Date(new Date().getTime() + (30*24*60*60*1000))),
                status: true
            })
        case CANCEL_SUBSCRIPTION:
        default:
            return state;
    }
};

export default subscriptionReducer;
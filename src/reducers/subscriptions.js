import { ADD_SUBSCRIPTION } from '../actions/subscriptionActions'
import { RENEW_SUBSCRIPTION } from '../actions/subscriptionActions'
import { CANCEL_SUBSCRIPTION } from '../actions/subscriptionActions'

const subscription = (state = {}, action) => {
    switch(action.type) {
        case ADD_SUBSCRIPTION:
            return action.payload
        case RENEW_SUBSCRIPTION:
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                startDate: action.startDate,
                endDate: action.endDate,
                status: true
            })
        default:
            return state;
    }
}

const subscriptions = (state = [], action) => {
    switch (action.type) {
        case ADD_SUBSCRIPTION:
            return [
                ...state,
                subscription(undefined, action)
            ]
        case RENEW_SUBSCRIPTION:
            return state.map(sub =>
                subscription(sub, action)
            )
        case CANCEL_SUBSCRIPTION:
            return [
            // ...state.slice(0, action.id) or??
            ...state.slice(0,action.id - 1),
            ...state.slice(action.id + 1)
            ]
        default:
            return state
    }
}

export default subscriptions
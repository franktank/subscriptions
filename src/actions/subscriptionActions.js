export const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION'
export const RENEW_SUBSCRIPTION = 'RENEW_SUBSCRIPTION'
export const CANCEL_SUBSCRIPTION = 'CANCEL_SUBSCRIPTION'

let nextSubscriptionID = 0;
export const addSubscription = (oid) => {
    return {
        type: ADD_SUBSCRIPTION,
        payload: {
            id: nextSubscriptionID++,
            oid
        }
    }
}

export const renewSubscription = (id) => {
    return {
        type: RENEW_SUBSCRIPTION,
        payload: {
            id 
        }
    }
}

export const cancelSubscription = (id) => {
    return {
        type: CANCEL_SUBSCRIPTION,
        payload: {
            id
        }
    }
}
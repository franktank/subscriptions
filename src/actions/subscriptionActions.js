export const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION'
export const RENEW_SUBSCRIPTION = 'RENEW_SUBSCRIPTION'
export const CANCEL_SUBSCRIPTION = 'CANCEL_SUBSCRIPTION'

let nextSubscriptionID = 0;
export const addSubscription = (oid, startDate, endDate) => {
    return {
        type: ADD_SUBSCRIPTION,
        payload: {
            id: nextSubscriptionID++,
            startDate,
            endDate,
            oid
        }
    }
}

export const renewSubscription = (id, startDate, endDate) => {
    return {
        type: RENEW_SUBSCRIPTION,
        payload: {
            id,
            startDate,
            endDate
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
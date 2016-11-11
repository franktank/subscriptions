export const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION'
export const RENEW_SUBSCRIPTION = 'RENEW_SUBSCRIPTION'
export const CANCEL_SUBSCRIPTION = 'CANCEL_SUBSCRIPTION'

let nextSubscriptionID = 0;
export const addSubscription = (organizationID, startDate, endDate) => {
    return {
        type: ADD_SUBSCRIPTION,
        payload: {
            id: nextSubscriptionID++,
            organizationID,
            startDate,
            endDate,
            status: true
        }
    }
}

export const renewSubscription = (id, startDate, endDate) => {
    return {
        type: RENEW_SUBSCRIPTION,
        id,
        startDate,
        endDate
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
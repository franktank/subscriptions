import * as actions from './subscriptionActions'
import * as types from './subscriptionActions'

describe('actions', () => {
  it('should create an action to add a subscription', () => {
    const organizationID = 1
    const startDate = "1/1/2016"
    const endDate = "1/31/2016"
    
    const expectedAction = {
        payload: {
            endDate: "1/31/2016",
            id: 0,
            organizationID: 1,
            startDate: "1/1/2016",
            status: true,
        },
        type: "ADD_SUBSCRIPTION",
    }
    expect(actions.addSubscription(organizationID, startDate, endDate)).toEqual(expectedAction)
  })
  
  it('should create an action to renew a subscription', () => {
    const id = 1
    const startDate = "1/1/2016"
    const endDate = "1/31/2016"
    
    const expectedAction = {
        endDate: "1/31/2016",
        id: 1,
        startDate: "1/1/2016",
        type: "RENEW_SUBSCRIPTION",
    }
    expect(actions.renewSubscription(id, startDate, endDate)).toEqual(expectedAction)
  })
  
  it('should create an action to cancel a subscription', () => {
    const id = 1
    
    const expectedAction = {
        id: 1,
        type: "CANCEL_SUBSCRIPTION",
    }
    expect(actions.cancelSubscription(id)).toEqual(expectedAction)
  })
})
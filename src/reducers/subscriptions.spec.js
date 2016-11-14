import subscriptions from './subscriptions'
import subscription from './subscriptions'
import * as types from '../actions/subscriptionActions'

describe('subscriptions reducer', () => {
  it('should return the initial state', () => {
    expect(
      subscriptions(undefined, {})
    ).toEqual([
    ])
  })

  it('should handle ADD_SUBSCRIPTION', () => {
    expect(
        subscriptions([], {
            payload: {
                endDate: "1/31/2016",
                id: 1,
                organizationID: 1,
                startDate: "1/1/2016",
                status: true,
            },
            type: types.ADD_SUBSCRIPTION,
        })
    ).toEqual(
        [
            {
                id: 1,
                organizationID: 1,
                startDate: "1/1/2016",
                endDate: "1/31/2016",
                status: true
            }
        ]
    )

    expect(
      subscriptions(
        [
            {
            id: 1,
            organizationID: 1,
            startDate: "1/1/2016",
            endDate: "1/31/2016",
            status: true
            }
        ],
        {
            payload: {
                endDate: "1/31/2016",
                id: 2,
                organizationID: 2,
                startDate: "1/1/2016",
                status: true,
            },
            type: types.ADD_SUBSCRIPTION, 
        }
      )
    ).toEqual(
        [
            {
                id: 1,
                organizationID: 1,
                startDate: "1/1/2016",
                endDate: "1/31/2016",
                status: true
            },
            {
                endDate: "1/31/2016",
                id: 2,
                organizationID: 2,
                startDate: "1/1/2016",
                status: true,
            }
        ]
    )
  })
  
  it('should handle RENEW_SUBSCRIPTION', () => {
    expect(
        subscriptions([
                {
                    id: 1,
                    organizationID: 1,
                    startDate: "1/1/2016",
                    endDate: "1/31/2016",
                    status: true
                }
            ],  {
            endDate: "2/1/2016",
            id: 1,
            startDate: "1/2/2016",
            type: types.RENEW_SUBSCRIPTION
        })
    ).toEqual(
        [
            {
                id: 1,
                organizationID: 1,
                startDate: "1/2/2016",
                endDate: "2/1/2016",
                status: true
            }
        ]
    )    
  })
  
  it('should handle CANCEL_SUBSCRIPTION', () => {
    expect(
        subscriptions([
                {
                    id: 1,
                    organizationID: 1,
                    startDate: "1/1/2016",
                    endDate: "1/31/2016",
                    status: true
                }
            ],  {
            id: 1,
            type: types.CANCEL_SUBSCRIPTION
        })
    ).toEqual(
        []
    )  
  })
})
import React from 'react';
import { connect } from 'react-redux';
import { renewSubscription, cancelSubscription } from '../actions';
import SubscriptionTable from '../components/SubscriptionTable'

const mapStateToProps = (state) => {
  return {
    subscriptions: state.subscriptions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRenewButtonClick: (id) => {
      dispatch(renewSubscription(id))
    },
    onCancelButtonClick: (id) => {
        dispatch(cancelSubscription(id))
    }
  }
}

const UpdateSubscriptionTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscriptionTable)

export default UpdateSubscriptionTable
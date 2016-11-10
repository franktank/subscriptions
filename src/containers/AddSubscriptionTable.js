import React from 'react';
import { connect } from 'react-redux';
import { addSubscription } from '../actions';
import OrganizationTable from '../components/OrganizationTable'

const mapStateToProps = (state) => {
  return {
    organizations: state.organizations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddButtonClick: (id) => {
      dispatch(addSubscription(id))
    }
  }
}

const AddSubscriptionTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationTable)

export default AddSubscriptionTable
import { connect } from 'react-redux';
import { addSubscription } from '../actions/subscriptionActions';
import OrganizationTable from '../components/OrganizationTable'

const mapStateToProps = (state) => {
  return {
    organizations: state.organizations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddButtonClick: (id, startDate, endDate) => {
      dispatch(addSubscription(id, startDate, endDate))
    }
  }
}

const AddSubscriptionTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrganizationTable)

export default AddSubscriptionTable
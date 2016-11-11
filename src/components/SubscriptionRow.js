import React, { PropTypes } from 'react';

const SubscriptionRow = ({ onRButtonClick, onCButtonClick, status, organizationID, startDate, endDate }) => (
    <tr>
        <td style={{color: status ? 'green' : 'red'}}>{organizationID}</td>
        <td>{startDate}</td>
        <td>{endDate}</td>
        <td>Renew Subscription </td>
        <td>Cancel Subscription</td>
    </tr>
)

SubscriptionRow.propTypes = {
  onRButtonClick: PropTypes.func.isRequired,
  onCButtonClick: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
  organizationID: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired
}

export default SubscriptionRow
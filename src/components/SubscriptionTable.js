import React, { PropTypes } from 'react';
// Components
import SubscriptionRow from './SubscriptionRow';

const SubscriptionTable = ({ subscriptions, onRenewButtonClick, onCancelButtonClick }) => (
    <table>
        <thead>
          <tr>
            <th>OrganizationID</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th>Renew</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
            {subscriptions.map(subscription =>
                <SubscriptionRow
                    key={subscription.id}
                    {...subscription}
                    onRButtonClick={() => onRenewButtonClick(subscription.id, JSON.stringify(new Date(), JSON.stringify(new Date(new Date().getTime() + (30*24*60*60*1000)))))}
                    onCButtonClick={() => onCancelButtonClick(subscription.id)}
                />
            )}
        </tbody>
    </table>
)

SubscriptionTable.propTypes = {
  subscriptions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    organizationID: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onRenewButtonClick: PropTypes.func.isRequired,
  onCancelButtonClick: PropTypes.func.isRequired
}

export default SubscriptionTable
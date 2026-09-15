import React from 'react';

const topPayoutsData = [
  { region: 'Top Asia Partner', payout: '$878 300' },
  { region: 'Middle East Expert Partner', payout: '$369 050' },
  { region: 'IB Partner', payout: '$189 880' },
  { region: "Vietnam's partner", payout: '$176 900' },
  { region: "China's Top Partner", payout: '$155 600' },
];

const TopPartnerPayouts = () => {
  return (
    <div className="payouts-list-section">
      <div className="payouts-list-container">
        <div className="payouts-list-header">
          <h2 className="payouts-list-title">Top partner payouts</h2>
          <p className="payouts-list-subtitle">Previous month</p>
        </div>
        
        <div className="payouts-list-separator"></div>

        <ul className="payouts-list-items">
          {topPayoutsData.map((item, index) => (
            <li key={index} className="payouts-list-item">
              <span className="payouts-list-region">{item.region}</span>
              <span className="payouts-list-payout">{item.payout}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopPartnerPayouts;
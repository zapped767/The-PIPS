import React from "react";
import standardAccountsData from "../../../data/trading-tables/standard-accounts-table.json";
// import MarketTableSingle from "../../../components/market-tables/MarketTableSingle.js";
import StandardAccountTableSingle from "../../../components/trading-tables/StandardAccountTableSingle.js";
import TopicTwo from "../../../components/trading-contents/standard-accounts-contents/TopicTwo";

const StandardAccountsContentOne = () => {
  return (
    <>
      {/* Add the TopicOne component here */}
      <TopicTwo />

      <div className="market__table bg--white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 table-responsive">
              <table className="mkt__pre__list">
                <thead>
                  <tr>
                    <th className="account-tier">Account Type</th>
                    <th className="account-subheadline">Premium Tagline</th>
                    <th className="account-description">Key Features</th>
                    <th className="account-deposit">
                      <span className="nobr">Min Deposit</span>
                    </th>
                    <th className="account-deposit">
                      <span className="nobr">Action</span>
                    </th> 
                  </tr>
                </thead>
                <tbody>
                  {standardAccountsData &&
                    standardAccountsData.map((single, key) => {
                      return (
                        <StandardAccountTableSingle data={single} key={key} />
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StandardAccountsContentOne;

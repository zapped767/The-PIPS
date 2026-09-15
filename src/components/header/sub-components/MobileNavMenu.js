import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = () => {
  return (
    <nav className="offcanvasNavigation" id="offcanvas-navigation">
      <ul>

        {/* TRADING */}
        <li className="menuItemHasChildren">
          <Link to="#">Trading</Link>
          <ul className="subMenu">
            <li>
              <Link to="/trading/types-of-accounts">Types of Accounts</Link>
            </li>
            {/* <li>
              <Link to="/trading/professional-accounts">
                Professional Accounts
              </Link>
            </li> */}
            <li>
              <Link to="/trading/demo-trading-account">
                Demo Trading Accounts
              </Link>
            </li>
            <li>
              <Link to="/trading/deposits-and-withdrawals">
                Deposits & Withdrawals
              </Link>
            </li>
            <li>
              <Link to="/trading/fees">Fees</Link>
            </li>
            <li>
              <Link to="/trading/client-protection">Client Protection</Link>
            </li>
            {/* <li>
              <Link to="/trading/order-execution">Order Execution</Link>
            </li> */}
          </ul>
        </li>

        {/* MARKETS */}
        <li className="menuItemHasChildren">
          <Link to="#">Markets</Link>
          <ul className="subMenu">
            <li>
              <Link to="/markets/forex-market">Forex CFD</Link>
            </li>
            <li>
              <Link to="/markets/commodities-market">Commodities CFD</Link>
            </li>
            <li>
              <Link to="/markets/stock-market">Stocks CFD</Link>
            </li>
            <li>
              <Link to="/markets/indices-market">Indices CFD</Link>
            </li>
            <li>
              <Link to="/markets/crypto-market">Crypto CFD</Link>
            </li>
          </ul>
        </li>

        {/* PLATFORMS */}
        <li className="menuItemHasChildren">
          <Link to="#">Platforms</Link>
          <ul className="subMenu">
            <li>
              <Link to="/platforms/pips-terminal">Pips Terminal</Link>
            </li>
            <li>
              <Link to="/platforms/pips-trade-app">Pips Trade App</Link>
            </li>
            {/* <li>
              <Link to="/platforms/meta-trader-web-terminal">
                Meta Trader Web Terminal
              </Link>
            </li>
            <li>
              <Link to="/platforms/meta-trader-5">Meta Trader 5</Link>
            </li>
            <li>
              <Link to="/platforms/meta-trader-5-mobile">
                Meta Trader 5 Mobile
              </Link>
            </li>
            <li>
              <Link to="/platforms/meta-trader-4">Meta Trader 4</Link>
            </li>
            <li>
              <Link to="/platforms/meta-trader-4-Mobile">
                Meta Trader 4 Mobile
              </Link>
            </li> */}
          </ul>
        </li>

        {/* RESOURCES */}
        <li className="menuItemHasChildren">
          <Link to="#">Resources</Link>
          <ul className="subMenu">
            <li>
              <Link to="/resources/analytical-tools">Analytical Tools</Link>
            </li>
            <li>
              <Link to="/resources/economic-calendar">
                Economic Calendar
              </Link>
            </li>
            <li>
              <Link to="/resources/trading-calculator">
                Trading Calculator
              </Link>
            </li>
            {/* <li>
              <Link to="/resources/born-to-trade-podcast">
                Born To Trade Podcast
              </Link>
            </li> */}
            {/* <li>
              <Link to="/resources/vps-hosting">VPS Hosting</Link>
            </li> */}
            <li>
              <Link to="/resources/currency-converter">
                Currency Converter
              </Link>
            </li>
            {/* <li>
              <Link to="/resources/the-pips-insights">
                The Pips Insights
              </Link>
            </li> */}
            {/* <li>
              <Link to="/resources/tick-history">Tick History</Link>
            </li> */}
          </ul>
        </li>

        {/* COMPANY */}
        <li className="menuItemHasChildren">
          <Link to="#">Company</Link>
          <ul className="subMenu">
            <li>
              <Link to="/company/about">About Us</Link>
            </li>
            <li>
              <Link to="/company/contact">Contact Us</Link>
            </li>
          </ul>
        </li>

        {/* PARTNERS */}
        {/* <li>
          <Link to="/partners">Partners</Link>
        </li> */}

      </ul>
    </nav>
  );
};

export default MobileNavMenu;

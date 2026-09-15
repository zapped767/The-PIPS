import { Link } from "react-router-dom";
// import { IoIosArrowDown } from "react-icons/io";

const Navigation = () => {
  return (
    <nav className="mainmenu__nav">
      <ul className="mainmenu">
        <li className="drop">
          <Link to="#">
            {/* Trading <IoIosArrowDown /> */}
            Trading
          </Link>
          <ul className="dropdown">
            <li>
              <Link to={process.env.PUBLIC_URL + "/trading/types-of-accounts"}>
                Types of Accounts
              </Link>
            </li>
            {/* <li>
              <Link
                to={process.env.PUBLIC_URL + "/trading/professional-accounts"}
              >
                Professional accounts
              </Link>
            </li> */}
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/trading/demo-trading-account"}
              >
                Demo trading accounts
              </Link>
            </li>
            <li>
              <Link
                to={
                  process.env.PUBLIC_URL + "/trading/deposits-and-withdrawals"
                }
              >
                Deposits and withdrawals
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/trading/fees"}>Fees</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/trading/client-protection"}>
                Client protection
              </Link>
            </li>
            {/* <li>
              <Link to={process.env.PUBLIC_URL + "/trading/order-execution"}>
                Order execution
              </Link>
            </li> */}
          </ul>
        </li>
        <li className="drop">
          <Link to="#">
            {/* Markets <IoIosArrowDown /> */}
            Markets
          </Link>
          <ul className="dropdown">
            <li>
              <Link to={process.env.PUBLIC_URL + "/markets/forex-market"}>
                Forex CFD
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/markets/commodities-market"}>
                Commodities CFD
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/markets/stock-market"}>
                Stocks CFD
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/markets/indices-market"}>
                Indices CFD
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/markets/crypto-market"}>
                Crypto CFD
              </Link>
            </li>
          </ul>
        </li>
        <li className="drop">
          <Link to="#">
            {/* Platforms <IoIosArrowDown /> */}
            Platforms
          </Link>
          <ul className="dropdown">
            <li>
              <Link to={process.env.PUBLIC_URL + "/platforms/pips-terminal"}>
                Pips Terminal
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/platforms/pips-trade-app"}>
                Pips Trade App
              </Link>
            </li>
            {/* <li>
              <Link
                to={
                  process.env.PUBLIC_URL + "/platforms/meta-trader-web-terminal"
                }
              >
                Meta Trader Web Terminal
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/platforms/meta-trader-5"}>
                Meta Trader 5
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/platforms/meta-trader-5-mobile"}
              >
                Meta Trader 5 Mobile
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/platforms/meta-trader-4"}>
                Meta Trader 4
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/platforms/meta-trader-4-Mobile"}
              >
                Meta Trader 4 Mobile
              </Link>
            </li> */}
          </ul>
        </li>
        <li className="drop">
          <Link to="#">
            {/* Resources <IoIosArrowDown /> */}
            Resources
          </Link>
          <ul className="dropdown">
            <li>
              <Link to={process.env.PUBLIC_URL + "/resources/analytical-tools"}>
                Analytical Tools
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/resources/economic-calendar"}
              >
                Economic Calendar
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/resources/trading-calculator"}
              >
                Trading Calculator
              </Link>
            </li>
            {/* <li>
              <Link
                to={process.env.PUBLIC_URL + "/resources/born-to-trade-podcast"}
              >
                Born To Trade Podcast
              </Link>
            </li> */}
            {/* <li>
              <Link to={process.env.PUBLIC_URL + "/resources/vps-hosting"}>
                VPS Hosting
              </Link>
            </li> */}
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/resources/currency-converter"}
              >
                Currency Converter
              </Link>
            </li>
            {/* <li>
              <Link
                to={process.env.PUBLIC_URL + "/resources/the-pips-insights"}
              >
                The Pips Insights
              </Link>
            </li> */}
            {/* <li>
              <Link to={process.env.PUBLIC_URL + "/resources/tick-history"}>
                Tick History
              </Link>
            </li> */}
          </ul>
        </li>
        {/* <li>
          <Link to={process.env.PUBLIC_URL + "/company/contact"}>Company</Link>
        </li> */}
        <li className="drop">
          <Link to="#">
            {/* Company <IoIosArrowDown /> */}
            Company
          </Link>
          <ul className="dropdown">
            <li>
              <Link to={process.env.PUBLIC_URL + "/company/about"}>
                About Us
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/company/contact"}>
                Contact Us
              </Link>
            </li>
          </ul>
        </li>
        {/* <li>
          <Link to={process.env.PUBLIC_URL + "/partners"}>Partners</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;

import React from "react";
import MarketTableSingle from "../../components/market-tables/MarketTableSingle.js";
import { useMarketTableData } from "../../hooks/useMarketTableData.js";

// Seed data imports (used as initial/fallback values)
import cryptoSeed from "../../data/market-tables/crypto-market-table.json";
import commoditiesSeed from "../../data/market-tables/commodities-market-table.json";
import forexSeed from "../../data/market-tables/forex-market-table.json";
import indicesSeed from "../../data/market-tables/indices-market-table.json";
import stockSeed from "../../data/market-tables/stock-market-table.json";

const SEED_MAP = {
  crypto: cryptoSeed,
  commodities: commoditiesSeed,
  forex: forexSeed,
  indices: indicesSeed,
  stocks: stockSeed,
};

const HEADER_LABELS = {
  crypto: { col4: "Volume", col5: "%7day" },
  commodities: { col4: "Volume", col5: "%24h" },
  forex: { col4: "Liquidity", col5: "%24h" },
  indices: { col4: "Volume", col5: "%24h" },
  stocks: { col4: "Volume", col5: "%24h" },
};

/**
 * MarketTable
 *
 * Props:
 *   tableType {string} - "crypto" | "commodities" | "forex" | "indices" | "stocks"
 *                        Defaults to "crypto" to keep backward compatibility.
 */
const MarketTable = ({ tableType = "crypto" }) => {
  const seed = SEED_MAP[tableType] ?? cryptoSeed;
  const { rows, loading, error } = useMarketTableData(tableType, seed);
  const headers = HEADER_LABELS[tableType] ?? HEADER_LABELS.crypto;

  return (
    <div className="market__table bg--white pt--140 pb--120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 table-responsive">
            {error && (
              <p className="text-muted small text-center mb--10">
                Live data unavailable - showing last known prices.
              </p>
            )}
            <table className="mkt__pre__list">
              <thead>
                <tr>
                  <th className="market-no">
                    <span className="nobr">#No</span>
                  </th>
                  <th className="market-symbol">Name &amp; Symbol</th>
                  <th className="market-prize">
                    <span className="nobr">Price</span>
                  </th>
                  <th className="market-volume">
                    <span className="nobr">{headers.col4}</span>
                  </th>
                  <th className="market-dat">
                    <span className="nobr">{headers.col5}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((single, key) => (
                  <MarketTableSingle
                    data={single}
                    key={key}
                    loading={loading && key === 0}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTable;

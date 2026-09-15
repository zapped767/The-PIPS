import PropTypes from "prop-types";
import React from "react";

const formatPrice = (price) => {
  if (price === undefined || price === null) return "-";
  if (price >= 1000)
    return price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  if (price >= 1)
    return price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    });
  return price.toLocaleString("en-US", {
    minimumFractionDigits: 4,
    maximumFractionDigits: 6,
  });
};

const formatVolume = (volume) => {
  if (!volume) return "-";
  if (volume >= 1_000_000_000)
    return `$${(volume / 1_000_000_000).toFixed(2)}B`;
  if (volume >= 1_000_000) return `$${(volume / 1_000_000).toFixed(2)}M`;
  if (volume >= 1_000) return `$${(volume / 1_000).toFixed(2)}K`;
  return `$${volume.toLocaleString()}`;
};

const MarketTableSingle = ({ data }) => {
  const isPositive = data.percent >= 0;

  return (
    <tr>
      <td className="market-no">#{data.id}</td>
      <td className="market-symbol">
        <img
          src={data.image}
          alt={data.symbol}
          style={{ width: "30px", marginRight: "7px", verticalAlign: "middle" }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        {data.symbol}
      </td>
      <td className="market-prize">${formatPrice(data.price)}</td>
      <td className="market-volume">{formatVolume(data.volume)}</td>
      <td
        className="market-dat"
        style={{ color: isPositive ? "#16a34a" : "#dc2626", fontWeight: 600 }}
      >
        {isPositive ? "+" : ""}
        {data.percent}%
      </td>
    </tr>
  );
};

MarketTableSingle.propTypes = {
  data: PropTypes.object,
};

export default MarketTableSingle;

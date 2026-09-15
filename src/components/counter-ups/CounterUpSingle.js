import PropTypes from "prop-types";
import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

// Parses a title like "2000+", "13 Offices", "98" into { number, suffix }
const parseTitle = (title) => {
  const match = title.match(/^(\d+)(.*)/);
  if (!match) return { number: 0, suffix: title };
  return {
    number: parseInt(match[1], 10),
    suffix: match[2] || "",
  };
};

const CounterUpSingle = ({ data }) => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) setDidViewCountUp(true);
  };

  const { number, suffix } = parseTitle(data.title);

  return (
    <VisibilitySensor onChange={onVisibilityChange} delayedCall>
      <div className="counterup__list">
        <h6>
          {didViewCountUp ? (
            <CountUp start={0} end={number} duration={2.5} suffix={suffix} />
          ) : (
            <span>0</span>
          )}
        </h6>
        <p>{data.number}</p>
      </div>
    </VisibilitySensor>
  );
};

CounterUpSingle.propTypes = {
  data: PropTypes.object,
};

export default CounterUpSingle;

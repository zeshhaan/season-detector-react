import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  winter: {
    text: "It's shivering cold",
    iconName: "snowflake"
  },
  summer: {
    text: "Poramkayal chood",
    iconName: "sun"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth()); //this will return the season name
  const { text, iconName } = seasonConfig[season]; //example seasonConfig[winter] if the season is evaluated to the result ''winter
  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${iconName} icon iconLeft`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon iconRight`} />
    </div>
  );
};

export default SeasonDisplay;

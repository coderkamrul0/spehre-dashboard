import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import "./CircleProgress.css";
import RadialSeparators from "./RadialSeparators";

const CircleProgress = () => {
  return (
    <div className="h-40 w-40">
      <div label="Progressbar with separators">
        <CircularProgressbarWithChildren
          value={40}
          text={`${350}`}
          strokeWidth={15}
          styles={buildStyles({
            strokeLinecap: "butt",
          })}
        >
          <RadialSeparators
            count={10}
            style={{
              background: "#fff",
              width: "2px",
              // This needs to be equal to props.strokeWidth
              height: `${15}%`,
            }}
          />
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default CircleProgress;

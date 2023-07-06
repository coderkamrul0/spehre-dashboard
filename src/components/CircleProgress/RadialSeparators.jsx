import React from "react";

function Separator(props) {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        transform: `rotate(${props.turns}turn)`
      }}
    >
      <div style={props.style} />
    </div>
  );
}

function RadialSeparators(props) {
  const turns = 1 / props.count;
  return Array.from({ length: props.count }).map((_, index) => (
    <Separator turns={index * turns} style={props.style} key={index} />
  ));
}

export default RadialSeparators;

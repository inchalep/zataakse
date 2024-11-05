import React from "react";
import { Range, getTrackBackground } from "react-range";

const RangeInput = ({ step, min, max, onChange, values }) => {
  return (
    <Range
      values={values}
      step={step}
      min={min}
      max={max}
      onChange={(values) => onChange(values)}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "26px",
            display: "flex",
            width: "98%",
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "2px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values,
                colors: ["#548BF4", "#ccc"],
                min: min,
                max: max,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          key={props.key}
          style={{
            ...props.style,
            height: "3px",
            width: "3px",
            borderRadius: "4px",
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 6px #AAA",
          }}
        >
          <div
            style={{
              height: "16px",
              width: "5px",
              backgroundColor: isDragged ? "#548BF4" : "#CCC",
            }}
          />
        </div>
      )}
    />
  );
};

export default RangeInput;

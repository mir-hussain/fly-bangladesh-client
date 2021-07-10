import React from "react";

const Seat = ({ color, handleClick }) => {
  return (
    <div onClick={handleClick}>
      <svg
        width='397'
        height='376'
        viewBox='0 0 397 376'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='green'>
          <rect
            id='base'
            x='26'
            y='3'
            width='345'
            height='333'
            rx='38'
            fill={color ? "#FF7575" : "#86DD78"}
            stroke={color ? "#FF2626" : "#42BB2F"}
            stroke-width='5'
          />
          <rect
            id='back'
            x='384'
            y='281'
            width='92'
            height='372'
            rx='38'
            transform='rotate(90 384 281)'
            fill={color ? "#FF7575" : "#86DD78"}
            stroke={color ? "#FF2626" : "#42BB2F"}
            stroke-width='5'
          />
          <rect
            id='belt'
            x='384'
            y='160'
            width='42'
            height='372'
            rx='21'
            transform='rotate(90 384 160)'
            fill={color ? "#FF7575" : "#86DD78"}
            stroke={color ? "#FF2626" : "#42BB2F"}
            stroke-width='5'
          />
          <rect
            id='left-handle'
            x='3'
            y='54'
            width='46'
            height='232'
            rx='23'
            fill={color ? "#FF7575" : "#86DD78"}
            stroke={color ? "#FF2626" : "#42BB2F"}
            stroke-width='5'
          />
          <rect
            id='right-handle'
            x='348'
            y='54'
            width='46'
            height='232'
            rx='23'
            fill={color ? "#FF7575" : "#86DD78"}
            stroke={color ? "#FF2626" : "#42BB2F"}
            stroke-width='5'
          />
        </g>
      </svg>
    </div>
  );
};

export default Seat;

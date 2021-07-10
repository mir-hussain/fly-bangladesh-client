import React, { useState } from "react";
import Seat from "../components/Seat";

const Booking = () => {
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setColor(!color);
  };

  return (
    <div>
      <Seat color={color} handleClick={handleClick} />
    </div>
  );
};

export default Booking;

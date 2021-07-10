import React, { useState } from "react";
import Seat from "../components/Seat";
import { useParams } from "react-router";

const Booking = () => {
  const { id } = useParams();
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default Booking;

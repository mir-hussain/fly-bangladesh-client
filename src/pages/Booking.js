import React, { useState } from "react";
import Seat from "../components/Seat";
import { useParams } from "react-router";

const Booking = () => {
  const { id } = useParams();
  const splitted = id.split("+");
  const [destination, date] = splitted;
  return (
    <section className='booking-section'>
      <h1>Destination: {destination}</h1>
      <h1>Date: {date}</h1>
    </section>
  );
};

export default Booking;

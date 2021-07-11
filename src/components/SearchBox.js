import React, { useState } from "react";
import { Link } from "react-router-dom";
import { currentDate } from "./time";

const SearchBox = () => {
  const [destination, setDestination] =
    useState("Chittagong");

  const [date, setDate] = useState(currentDate);
  const [className, setClassName] = useState("Business");

  const handleDestination = (event) => {
    const to = event.target.value;
    setDestination(to);
  };

  const handleDate = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
  };

  const handleClass = (event) => {
    const selectedClass = event.target.value;
    setDate(selectedClass);
  };

  return (
    <div className='search-box'>
      <div>
        <label htmlFor='from'>From:</label>
        <select
          name='from'
          id='from'
          defaultValue='Dhaka'
          disabled
        >
          <option value='dhaka'>Dhaka</option>
        </select>
      </div>
      <div>
        <label htmlFor='to'>To:</label>
        <select
          name='to'
          id='to'
          defaultValue='Chittagong'
          onChange={handleDestination}
          required
        >
          <option value='Chittagong'>Chittagong</option>
          <option value='India'>India</option>
          <option value='USA'>USA</option>
        </select>
      </div>
      <div>
        <label htmlFor='class'>Class: </label>
        <select
          name='class'
          id='class'
          defaultValue='Business'
          onChange={handleClass}
          required
        >
          <option value='Business'>Business</option>
          <option value='Economy'>Economy</option>
        </select>
      </div>
      <div>
        <input
          type='date'
          name='date'
          id='date'
          min={currentDate}
          max='2021-07-15'
          onChange={handleDate}
          required
        />
      </div>
      <Link
        to={
          "/booking/" +
          destination +
          "+" +
          date +
          "+" +
          className
        }
      >
        Find
      </Link>
    </div>
  );
};

export default SearchBox;

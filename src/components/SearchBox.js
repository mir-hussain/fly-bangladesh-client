import React, { useState } from "react";
import { Link } from "react-router-dom";
import { currentDate } from "./time";

const SearchBox = () => {
  const [destination, setDestination] =
    useState("chittagong");

  const [date, setDate] = useState(currentDate);

  const handleDestination = (event) => {
    const to = event.target.value;
    setDestination(to);
  };

  const handleDate = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
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
      <Link to={"/booking/" + destination + "+" + date}>
        Find
      </Link>
    </div>
  );
};

export default SearchBox;

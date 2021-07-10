import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBox = () => {
  // const today = new Date()
  // console.log(today);
  // console.log(today.getDay());
  // console.log(today.getMonth());
  // console.log(today.getFullYear());

  const [destination, setDestination] =
    useState("chittagong");
  const [date, setDate] = useState("2021-07-10");

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
          <option value='chittagong'>Chittagong</option>
          <option value='india'>India</option>
          <option value='usa'>USA</option>
        </select>
      </div>
      <div>
        <input
          type='date'
          name='date'
          id='date'
          min='2021-07-10'
          max='2021-07-15'
          onChange={handleDate}
          value='2021-07-10'
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

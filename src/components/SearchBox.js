import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [destination, setDestination] =
    useState("chittagong");

  console.log(destination);

  const handleChange = (event) => {
    const to = event.target.value;
    setDestination(to);
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
          onChange={handleChange}
        >
          <option value='chittagong'>Chittagong</option>
          <option value='india'>India</option>
          <option value='usa'>USA</option>
        </select>
      </div>
      <Link to={"/booking/" + destination}>Find</Link>
    </div>
  );
};

export default SearchBox;

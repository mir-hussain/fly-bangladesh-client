import React from "react";
import SearchBox from "../components/SearchBox";

const Home = () => {
  return (
    <section className='home-section'>
      <div>
        <p>plan your travel with Fly Bangladesh.</p>
        <h1>Where are you going??</h1>
      </div>
      <SearchBox />
    </section>
  );
};

export default Home;

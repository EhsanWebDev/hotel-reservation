import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Hero hero="defaultHero">
      <Banner title="luxurious rooms" subTitle="deluxe rooms starting at $200">
        <Link to="rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;

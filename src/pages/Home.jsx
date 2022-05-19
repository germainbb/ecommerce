import React from "react";
import { Navbar } from "../components/Navbar";
import { Announcements } from "../components/Announcements";
import { SimpleSlider } from "../components/Slider";
//import "./components/Slick.css";
import { Categories } from "../components/Categories";

export const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <SimpleSlider />
      <Categories />
    </div>
  );
};

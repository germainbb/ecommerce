import React from "react";
import { Home } from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components/Slick.css";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Home />
    </div>
  );
}

export default App;

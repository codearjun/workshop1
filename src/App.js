import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Hello from "./Hello.js";
import Footer from "./Footer.js";
import Data from "./Data.js";

import "./App2.css";
import myicon from "./icon.png";

function App(props) {
  return (
    <div className="app-container">
      <div className="flex-item">
        <Header />
      </div>

      <div className="flex-item2">
        <Nav />
        <img src={myicon} />
      </div>

      <div className="flex-item3">
        <Hello name={Data().name} />

        <img src="https://media.istockphoto.com/id/1401100981/photo/young-woman-freelancer-traveler-working-online-using-laptop-and-enjoying-the-beautiful-nature.jpg?s=2048x2048&w=is&k=20&c=2R-K5X4-wSv4yUIC9_V72Q3hNPAmZ-iDDeDiCgC6MwM=" />
      </div>
      <div className="flex-item4">
        <Footer />
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;

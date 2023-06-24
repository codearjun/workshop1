import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Hello from "./Hello.js";
import Footer from "./Footer.js";
import Data from "./Data.js";

function App(props) {
  return (
    <div>
      <Header />

      <Nav />

      <Hello name={Data().name} />

      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;

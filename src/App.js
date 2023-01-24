import { React } from "react";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";

const App = ()=> {
  return (
    <div className="App">
      <Navbar/>
      <Countries/>
    </div>
  );
}

export default App;

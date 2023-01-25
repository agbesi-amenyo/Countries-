import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import CountryInfoPage from "./pages/CountryInfoPage";

import Navbar from "./components/Navbar";


const App = ()=> {
  return (
    <div className="App">
      <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries/> }> </Route>
        <Route path="/CountryInfoPage" element={<CountryInfoPage/>}> </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

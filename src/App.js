import { Routes, Route } from "react-router-dom"
import './App.css';
import dataCountries from "./countries.json"
import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import CountryDetails from "./components/CountryDetails"
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState(dataCountries)
  return (
    <div className="App">

      <Navbar/>
      
      
      <div className="container">
      <div className="row">
        
      <CountriesList
      countries = {countries} 
      />

      <Routes>

          <Route 
          path="/:countryID"
          element={<CountryDetails countries = {countries}/>}
          />

      </Routes>
      </div>
      </div>
      
    </div>
  );
}

export default App;

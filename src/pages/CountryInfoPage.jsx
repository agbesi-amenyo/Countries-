import React from 'react'
import { useNavigate } from "react-router";
import CountryInfo from '../components/CountryInfo';

const CountryInfoPage = () => {
  const navigate = useNavigate();
  return (
    <div className="justify-content-center max-w-screen md:px-20 mx-auto">
    <div
      className="back"
      onClick={() => {
        navigate(-1);
      }}
    >
      <span>&#8678;</span>
      <span>Go back </span>
    </div>
    <CountryInfo/>
  </div>
  )
}

export default CountryInfoPage; 
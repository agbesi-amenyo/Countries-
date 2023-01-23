import React, { useEffect, useState } from 'react'

const url = "https://restcountries.com/v3.1/all"; 

const Countries = () => {
    const [countries, setCountries]= useState([])

    const fetchCountryData = async()=>{
        const response = await fetch(url)
        const countries =await response.json()
        setCountries(countries)
        console.log(countries)
    }

    useEffect(() => {
        fetchCountryData()
      }, [])
    
  return (
  <div>
    {countries.map((country)=>{
        const {flag, name,region,population,languages,ccn3}= country 
        return <article key ={ccn3}>
                 <div >
                <img src={flag} alt={name} />
                <h3>{name}</h3>
                <h3>Region: {region}</h3>
                <h3>{population}</h3>
                <h3>{languages}</h3>
                <h3>{name}</h3>
            </div>    
         </article>
        {}

    })}
    </div>

  )
}

export default Countries ;
import Header from '../Header'
import { NavLink, useParams } from 'react-router-dom'


import React, { useState, useEffect } from 'react'

const CountryDetails = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [country, setCountry] = useState({})
  const params = useParams();



  useEffect(() => {

    fetch(`https://restcountries.com/v3.1/name/${params.name}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          let [country] = result;
          setCountry(country)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error)
        }
      )
  })


  if (error) {
    return <div>Error: {error.message}</div>;
  }
  else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  else if (!country){
    return <div>Country does not exist</div>;
  }
  else {
    return (
      <div>
        <div className='w-full'>
         <Header /> 
        </div>
      
      <div className='max-w-screen-xl mx-auto'>

        
        <div>
          <NavLink to={"/"}>
         <span className='px-5 py-2 ml-5 text-black'> back</span> 
          </NavLink>
        </div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-10 lg:py-24 mx-auto">
            <div className="lg:w-5/5 mx-auto flex flex-wrap">

              <img
                alt="ecommerce"
                className="border lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={country.flags.png} />

              <div className="lg:w-1/4 w-full lg:pl-10 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-7">{country.name.common}</h1>
                <p className="leading-relaxed"> native Name: {country.nativeName } </p>
                <p className="leading-relaxed">Population:  {country.population}</p>
                <p className="leading-relaxed">Region: {country.region}</p>
                <p className="leading-relaxed">Sub Region: {country.region}</p>
                <p className="leading-relaxed">Capital: {country.capital}</p>
              </div>

              <div className="lg:pt-16 mt-6 lg:mt-0">
                <p className="leading-relaxed">Top level domian: { }</p>
                <p className="leading-relaxed">Currencies: { }</p>
                <p className="leading-relaxed">Languages: { }</p>
              </div>




            </div>
          </div>
        </section>
      </div>

   </div> )
  }

}

export default CountryDetails
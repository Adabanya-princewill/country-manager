import React from 'react'



const Filter = ({filterCountriesByRegion}) => {

  return (
    <div>
       <select
       className='lg:p-4 p-2 mb-2 lg:mr-8 mr-5 bg-white text-sm rounded-md shadow-md focus:outline-none text-black'
       defaultValue={'Default'} onChange={(event) => filterCountriesByRegion(event)}>
       <option  value="Default" disabled>Filter by Region </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Filter
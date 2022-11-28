import React from 'react'
import { FaSearch } from 'react-icons/fa'


const Search = ({ searchCountryProp }) => {

 
  return (
    <div className='flex items-center shadow-md rounded-md pl-5'>
      <FaSearch />
      <input 
      placeholder='Search for a country...'
      className='text-sm py-2 px-4 outline-none sm:w-[200px]' 
      onKeyDown={(event) => searchCountryProp(event)} />
    </div>
  )
}

export default Search

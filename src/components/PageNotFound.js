import React from 'react'
import { NavLink } from 'react-router-dom'
import gif from './assets/pagenotfound.png'

const PageNotFound = () => {
  return (
    <div className='px-10 mt-10'>
       <NavLink to={"/"}>
         <span className='shadow-md rounded-md font-semibold px-5 py-2 ml-5 text-black'>Back to Home</span> 
          </NavLink>
      <img
      alt='page not found'
      className='px-10 object-none h-[] object-center mt-10'
      src={gif}
      />
    </div>
  )
}

export default PageNotFound
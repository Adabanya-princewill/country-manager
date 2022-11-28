import React from 'react'
import { NavLink } from 'react-router-dom'


const Card = ({ country }) => {



    return (
        <>
            <NavLink
                className=""
                to={`/country/${country.name.common}`}>

                <div className='shadow-md w-[300px] mb-4 ml-4'>

                    <div>
                        <img
                            className='object-cover rounded-t-md object-center h-40 w-[300px]'
                            src={country.flags.png} alt="" />
                    </div>

                    <div className='p-6'>
                        <h1 className='capitalize font-bold'> {country.name.common}</h1>
                        <p className='text-sm font-semibold'>Population: {country.population} </p>
                        <p className='text-sm font-semibold'>Region: {country.region} </p>
                        <p className='text-sm font-semibold'>Capital: {country.capital} </p>
                    </div>
                </div>
            </NavLink>

        </>

    )
}

export default Card
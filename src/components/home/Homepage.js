import Header from '../Header'
import Search from './Search'
import Filter from './Filter'
import Card from './Card'
import { useState, useEffect } from 'react'
import localStorage from 'localforage'


const HomePage = () => {

    let [countries, setCountries] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result)
                    setCountries(result)
                    localStorage.setItem('countries', result)

                },
                (error) => {
                    console.log(error)
                }
            )

    }, [])

    const searchCountry = (event) => {

        if (event.key === "Enter") {
            event.preventDefault();
            let inputData = event.target.value;
            if (inputData) {
                //  console.log(inputData)
                localStorage.getItem('countries', (err, value) => {
                    if (!err) {
                        setCountries(value.filter(country => country.name.common.toLowerCase() === inputData.toLowerCase()))
                    }
                    else {
                        console.log(err)
                    }
                })
            }

        }
    };

    const filterCountriesByRegion = (event) => {

        localStorage.getItem('countries', (err, value) => {
            if (!err) {
                //  console.log(event.target.value)
                let inputData = event.target.value;
                setCountries(value.filter(country => country.region.toLowerCase() === inputData.toLowerCase()))
            }
            else {
                console.log(err)
            }
        })

    }
    return (
        <>
            <Header />
            <section>
                <div className="py-5 mx-auto sm:max-w-xl md:max-w-screen-xl">
                    <div className="relative md:flex items-center justify-between mx-3 md:mx-0">

                        <span className="px-4 md:text-xl text-sm font-semibold text-gray-800"><Search searchCountryProp={searchCountry} /></span>


                        <div className="flex items-center space-x-8 lg:flex">
                            <span
                                className="inline-flex items-center justify-center md:text-xl tex-sm text-gray-800"
                            >
                                <Filter filterCountriesByRegion={filterCountriesByRegion} />
                            </span>

                        </div>

                    </div>
                </div>
            </section>

            <main className='sm:max-w-xl md:max-w-screen-xl grid w-[230px] mx-auto md:w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {countries.map((country, index) => (

                    <Card key={index} country={country} />


                ))}
            </main>
        </>

    )

}

export default HomePage
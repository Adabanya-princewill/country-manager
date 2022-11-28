import Header from '../Header'
import Search from './Search'
import Filter from './Filter'
import Card from './Card'
import { useState, useEffect } from 'react'


const HomePage = () => {

    let [countries, setCountries] = useState([])
    let [backupCountries, setCountriesBackup] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result)
                    setCountries(result)
                    setCountriesBackup(result)
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
                console.log(inputData)
                setCountries(backupCountries.filter(country => country.name.common.toLowerCase() == inputData.toLowerCase()))
            }

        }
    };

    const filterCountriesByRegion = (event) => {

        //  console.log(event.target.value)
        let inputData = event.target.value;
        setCountries(backupCountries.filter(country => country.region.toLowerCase() == inputData.toLowerCase()))
    }


    return (
        <>
            <Header />
            <section>
                <div className="py-5 mx-auto sm:max-w-xl md:max-w-screen-xl">
                    <div className="relative flex items-center justify-between">

                        <span className="px-4 md:text-xl tex-sm font-semibold text-gray-800"><Search searchCountryProp={searchCountry} /></span>


                        <div className="flex items-center  space-x-8 lg:flex">
                            <span
                                className="inline-flex items-center justify-center md:text-xl tex-sm text-gray-800"
                            >
                                <Filter filterCountriesByRegion={filterCountriesByRegion} />
                            </span>

                        </div>

                    </div>
                </div>
            </section>

            <main className='grid w-[300px] mx-auto md:w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
                {countries.map((country, index) => (
                    
                          <Card key={index} country={country} />
                
                  
                ))}
            </main>
        </>

    )

}

export default HomePage
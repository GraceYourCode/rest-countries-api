import { useEffect, useState } from "react";
import Country from "./Country"

const CountriesCollection = () => {
  const [data, setData] = useState();//array that holds all the data from the api

  //fetching the api
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
     xl:grid-cols-4 gap-8 sm:gap-10 md:gap-16 px-8 md:px-16 lg:px-20">
      {data ?
      //maps all the data in the array "data" and returns it
        data.map(datum =>
          <Country flag={datum.flags.png} name={datum.name.official}
            alt={datum.flags.alt} key={datum.cca2} population={datum.population}
            region={datum.region} capital={datum.capital} />
        ) :
        //in case where the api call is still awaiting promise, it displays the p-tag below
        <p className="animate-ping fixed top-1/2 left-1/2 text-light-text dark:text-white">Loading...</p>
      }
    </div>
  )
}

export default CountriesCollection

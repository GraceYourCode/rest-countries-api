import { useContext, useEffect } from "react";
import Country from "./Country"
import { allData } from "../store/index.";

const CountriesCollection = () => {
  const { data, setData } = useContext(allData);//array that holds all the data from the api

  const { setCompleteData } = useContext(allData);

  const {searchErr} = useContext(allData);

  //fetching the api
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(sentData => {
        setData(sentData);
        setCompleteData(sentData)
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
     xl:grid-cols-4 gap-8 sm:gap-10 md:gap-16 px-8 md:px-16 lg:px-20 z-10">
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
      {searchErr && <p className="fixed top-1/2 left-1/2 -ml-10 text-light-text dark:text-white font-bold">Country not found!!</p>}
    </div>
  )
}

export default CountriesCollection

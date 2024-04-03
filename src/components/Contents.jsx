import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import img from "../store/GLORIOUS EXIT.png"
import Infomation from "./Infomation";
import Button from "./Button";
import allData from "../store/index.";

const Contents = () => {
  const { name } = useParams();//fetch the name of the country from the url
  let { data, setData } = useContext(allData);
  const { country, setCountry } = useContext(allData);
  let { neededData, setNeededData } = useContext(allData);
  const location = useLocation();
  const code = location.state.code;
  console.log(code)


  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(response => response.json())
      .then(sentData => {
        setData(data = sentData);
        console.log(sentData)
        setCountry({
          nativeName: Object.values(sentData[0].name.nativeName),
          currencies: Object.values(sentData[0].currencies),
          languages: Object.values(sentData[0].languages)
        })
      })
      .catch(err => console.error(err));

    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(sentData => {
        console.log(sentData)
        setNeededData(neededData = sentData);
        console.log(neededData)
      })
      .catch(err => console.error(err));
  }, [name])

  return (
    (data && neededData ?
      <div className="flex flex-col landscape:lg:flex-row items-center px-8 md:px-16 lg:px-20 portrait:gap-10 gap-20 pb-5">
        <img src={data[0].flags.png} alt={data[0].flags.alt}
          className="portrait:w-full portrait:md:w-3/4 w-3/4 landscape:lg:w-2/5 landscape:xl:w-1/2" />

        <div className="w-full flex flex-col gap-4">
          <h5 className="text-lg font-bold">{name.slice(1)}</h5>
          <div className="flex portrait:flex-col portrait:md:flex-row landscape:items-center
          portrait:gap-y-6 gap-x-20 landscape:gap-x-10 xl:gap-x-20
          landscape:lg:items-start portrait:md:items-center">
            <div>

              {/**destructuring native name of countries */}
              <Infomation type="Native name" font="xs"
                value={country.nativeName.map(value => {
                  if (country.nativeName.indexOf(value) < 3 ) {
                    if (country.nativeName.indexOf(value) === country.nativeName.length - 1) return value.common;
                    else return value.common + ", "
                  }
                })} />

              <Infomation type="Population" value={data[0].population} font="xs" />
              <Infomation type="Region" value={data[0].region} font="xs" />
              <Infomation type="Sub Region" value={data[0].subregion} font="xs" />
              <Infomation type="Capital" value={data[0].capital} font="xs" />
            </div>

            <div>
              <Infomation type="Top Level Domain" value={data[0].tld} font="xs" />

              {/**code to destructure the currencies of countries
          who have more than 1 currency */}
              <Infomation type="Currencies" font="xs"
                value={country.currencies.map(currency => {
                  if (country.currencies.indexOf(currency) === country.currencies.length - 1) return currency.name;
                  else return currency.name + ", ";
                })} />

              {/**this code is same as the destructuring of the native names 
            and currencies of countries in this case, this code is to destructure 
              languages */}
              <Infomation type="Languages" font="xs"
                value={country.languages.map(language => {
                  if (country.languages.indexOf(language) < 3) {
                    if (country.languages.indexOf(language) === country.languages.length - 1) return language;
                    else return language + ", ";
                  }
                })} />
            </div>

          </div>
          {data[0].borders && <footer className="landscape:flex landscape:lg:block landscape:xl:flex portrait:md:flex gap-2 items-center">
            <p className="font-semibold text-xs portrait:mb-2 portrait:md:mb-0 mb-0 landscape:lg:mb-2 xl:mb-0">Border Countries:</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {data[0].borders.map(border => <Button cca3={border}
              value={neededData.find(data => data.cca3 === border).name.common} />)}
            </div>
          </footer>}
        </div>
      </div> :
      //in case where the api call is still awaiting promise, it displays the p-tag below
      <p className="animate-ping fixed top-1/2 left-1/2 -ml-12 text-light-text dark:text-white">Loading...</p>
    )
  )
}

export default Contents

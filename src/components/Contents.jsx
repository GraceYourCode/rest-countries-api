import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img from "../store/GLORIOUS EXIT.png"
import Infomation from "./Infomation";
import Button from "./Button";
import allData from "../store/index.";

const Contents = () => {
  const { name } = useParams();
  const { data, setData } = useContext(allData);
  const [country, setCountry] = useState()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name.slice(1)}?fullText=true`)
      .then(response => response.json())
      .then(sentData => {
        setData(sentData);
        console.log(sentData);
        console.log(data)
        setCountry({
          nativeName: Object.values(data[0].name.nativeName),
          currencies: Object.values(data[0].currencies),
          languages: Object.values(data[0].languages)
        })
        console.log(country)
      })
      .catch(err => console.error(err));
      console.log(name)
  }, [])

  return (
    (data ?
      <div className="flex flex-col landscape:lg:flex-row items-center px-8 md:px-16 lg:px-20 portrait:gap-10 gap-20 pb-5">
        <img src={img} alt="{data.flags.alt}"
          className="portrait:w-full portrait:md:w-3/4 w-3/4 landscape:lg:w-2/5" />

        <div className="w-full flex flex-col gap-4">
          <h5 className="text-lg font-bold">{name.slice(1)}</h5>
          {country && <div className="flex portrait:flex-col portrait:md:flex-row landscape:items-center
          portrait:gap-y-6 gap-x-20 landscape:gap-x-10 xl:gap-x-20
          landscape:lg:items-start portrait:md:items-center">
            <div>
              <Infomation type="Native name" font="xs"
                value={country.nativeName.map(value => {
                  if (country.nativeName.indexOf(value) === country.nativeName.length - 1) return value.common;
                  else return value.common + ", "
                })} />
              <Infomation type="Population" value={data[0].population} font="xs" />
              <Infomation type="Region" value={data[0].region} font="xs" />
              <Infomation type="Sub Region" value={data[0].subregion} font="xs" />
              <Infomation type="Capital" value={data[0].capital} font="xs" />
            </div>

            <div>
              <Infomation type="Top Level Domain" value={data[0].tld} font="xs" />
              <Infomation type="Currencies" font="xs"
                value={country.currencies.map(currency => {
                  if (country.currencies.indexOf(currency) === country.currencies.length - 1) return currency.name;
                  else return currency.name + ", ";
                })} />
              <Infomation type="Languages" font="xs"
              value={country.languages.map(language => {
                  if (country.languages.indexOf(language) === country.languages.length - 1) return language;
                  else return language + ", ";
                })} />
            </div>

          </div>}
          <footer className="landscape:flex landscape:lg:block landscape:xl:flex portrait:md:flex gap-2 items-center">
            <p className="font-semibold text-xs portrait:mb-2 portrait:md:mb-0 mb-0 landscape:lg:mb-2 xl:mb-0">Border Countries:</p>
            <div className="flex gap-2">
              <Button value="France" />
              <Button value="Germany" />
              <Button value="Netherlands" />
            </div>
          </footer>
        </div>
      </div> :
      //in case where the api call is still awaiting promise, it displays the p-tag below
      <p className="animate-ping fixed top-1/2 left-1/2 -ml-12 text-light-text dark:text-white">Loading...</p>
    )
  )
}

export default Contents

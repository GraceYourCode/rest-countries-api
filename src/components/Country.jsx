import { Link } from "react-router-dom"
import Infomation from "./Infomation"

const Country = ({ flag, name, population, region, capital, alt, cca3 }) => {
  const retrieve = {"code": cca3}

  return (
    <Link to={`/details/:${name}`} state={retrieve}  className="flex flex-col no-underline">
      <img src={flag} alt={alt}
        className="rounded-t h-40 shadow-lg dark:shadow-none shadow-dark-text" />
      <div className="bg-white dark:bg-dark-elements rounded-b text-light-text dark:text-white
      px-8 shadow-dark-text shadow-lg dark:shadow-none pb-8">
        <h5 className="my-5">{name}</h5>
        <Infomation type="Population" value={population} font="sm" />
        <Infomation type="Region" value={region} font="sm" />
        <Infomation type="Capital" value={capital} font="sm" />
      </div>
    </Link>
  )
}

export default Country

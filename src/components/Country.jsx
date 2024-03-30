import { Link } from "react-router-dom"
import Infomation from "./Infomation"

const Country = ({ flag, name, population, region, capital, alt }) => {
  return (
    <Link to="/details" className="flex flex-col no-underline">
      <img src={flag} alt={alt}
        className="rounded-t h-40 shadow-lg dark:shadow-none shadow-dark-text" />
      <div className="bg-white dark:bg-dark-elements rounded-b text-light-text dark:text-white
      px-8 shadow-dark-text shadow-lg dark:shadow-none pb-8">
        <h5 className="my-5">{name}</h5>
        <Infomation type="Population" value={population} />
        <Infomation type="Region" value={region} />
        <Infomation type="Capital" value={capital} />
      </div>
    </Link>
  )
}

export default Country

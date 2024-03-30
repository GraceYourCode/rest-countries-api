import { Link } from "react-router-dom"
import Infomation from "./Infomation"

const Country = () => {
  return (
    <Link to="/details" className="flex flex-col no-underline">
      <img src="https://flagcdn.com/w320/ax.png" alt="flag"
      className="rounded-t h40 shadow-lg shadow-dark-text" />
      <div className="bg-white dark:bg-dark-elements rounded-b text-light-text dark:text-white
      px-8 shadow-dark-text shadow-lg dark:shadow-none pb-8">
        <h5 className="my-5">Country name</h5>
        <Infomation />
        <Infomation />
        <Infomation />
      </div>
    </Link>
  )
}

export default Country

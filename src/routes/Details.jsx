import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"
import Contents from "../components/Contents"

const Details = () => {
  return (
    <div className='dark:bg-dark-bg bg-light-bg font-primary min-h-screen flex flex-col gap-8 sm:gap-10'>
      <NavBar />

      <Link to="/" className="bg-white dark:bg-dark-elements no-underline px-12 w-fit
      ml-4 sm:ml-8 md:ml-16 lg:ml-20 py-2 text-sm shadow-md dark:shadow-none
      text-light-text dark:text-white flex justify-between">Back</Link>

      <Contents />
    </div>
  )
}

export default Details

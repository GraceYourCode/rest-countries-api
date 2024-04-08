import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"
import Contents from "../components/Contents"
import allData from "../store/index."
import { useState } from "react"
import { MdKeyboardBackspace } from "react-icons/md";

const Details = () => {
  const [data, setData] = useState();
  const [country, setCountry] = useState();
  const [neededData, setNeededData] = useState();

  return (
    <allData.Provider value={{
      data,
      setData,
      country,
      setCountry,
      neededData,
      setNeededData
    }}>
      <div className='dark:bg-dark-bg bg-light-bg font-primary min-h-screen flex flex-col gap-8 sm:gap-10'>
        <NavBar />

        <Link to="/" className="bg-white dark:bg-dark-elements no-underline px-9 w-fit
      ml-4 sm:ml-8 md:ml-16 lg:ml-20 py-2 text-sm shadow-md dark:shadow-none
      text-light-text dark:text-white flex gap-2 items-center">
        <MdKeyboardBackspace />
        <span>Back</span>
      </Link>

        <Contents />
      </div>
    </allData.Provider>
  )
}

export default Details

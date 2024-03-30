import { useContext, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import allData from "../store/index.";
import Filter from "./Filter";

const ControlBar = () => {
  const { setData } = useContext(allData);

  const { completeData } = useContext(allData)

  const { setSearchErr } = useContext(allData);

  const searchBox = useRef();

  const search = () => {
    /**checking if the value of the search bar is empty so it can be reset 
     * to the actual value of the data. Else, it displays the data  that meets
     * condition set in the filter() method
     */
    if (searchBox.current.value === "") {
      setData(completeData);
      setSearchErr(false);
    } else {
      const newData = completeData.filter(datum => datum.name.official.toLowerCase().includes(searchBox.current.value.toLowerCase()));
      setData(newData);
      if (newData.length === 0) setSearchErr(true);//show error message if country can't be found
    }
  }

  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-5 sm:py-7 md:py-8 flex flex-col gap-3 md:flex-row justify-between">
        <div className="dark:bg-dark-elements bg-white w-full sm:w-96 flex gap-3 items-center rounded shadow-md dark:shadow-none
      py-2 sm:py-3 px-4 sm:px-6 outline-none text-light-text dark:text-white">
          <IoIosSearch className="dark:text-white text-light-text" />
          <input type="search" ref={searchBox} placeholder="Search for a country"
            className="outline-none text-light-text dark:text-white w-full bg-transparent"
            onChange={() => search()} />
        </div>
        <Filter />
      </div>
      <div>

      </div>
    </>
  )
}

export default ControlBar

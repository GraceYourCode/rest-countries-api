import { useContext, useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import allData from "../store/index.";
import Filter from "./Filter";

const ControlBar = ({position}) => {
  const { setData } = useContext(allData);

  const { completeData } = useContext(allData)

  const { setSearchErr } = useContext(allData);

  const {regionData} = useContext(allData);

  const searchBox = useRef();

  const controlBar = useRef();
  const [top, setTop] = useState()


  useEffect(() => {
    if (controlBar.current) {
      setTop(controlBar.current.getBoundingClientRect().top);
    }
  }, [])

  const search = () => {
    /**checking if the value of the search bar is empty so it can be reset 
     * to the actual value of the data. Else, it displays the data  that meets
     * condition set in the filter() method
     */
    if (searchBox.current.value === "") {

      //checks if a filter has been set
      if (regionData.length === 0) setData(completeData); 
      else setData(regionData);

      setSearchErr(false);//sets search error message
    } else {
      const newData = completeData.filter(datum => datum.name.common.toLowerCase().includes(searchBox.current.value.toLowerCase()));

      //checks if a filter has been set
      if (regionData.length === 0) setData(newData); 
      else setData(regionData.filter(datum => datum.name.common.toLowerCase().includes(searchBox.current.value.toLowerCase())));

      if (newData.length === 0) setSearchErr(true);//show error message if country can't be found
      else setSearchErr(false);
    }
  }

  return (
    <>
      <div className={`px-4 sm:px-8 md:px-16 lg:px-20 py-5 sm:py-7 md:py-8 ${position}
      flex flex-col gap-3 md:flex-row justify-between w-full bg-light-bg dark:bg-dark-bg`} ref={controlBar}
      style={{
        top: position === "fixed" ? top + "px" : "0px"
      }}>
        <div className="dark:bg-dark-elements bg-white w-full sm:w-96 flex gap-3 items-center rounded shadow-md dark:shadow-none
      py-2 sm:py-3 px-4 sm:px-6 outline-none text-light-text dark:text-white">
          <IoIosSearch className="dark:text-white text-light-text" />
          <input type="search" ref={searchBox} placeholder="Search for a country"
            className="outline-none text-light-text dark:text-white w-full bg-transparent"
            onChange={() => search()} />
        </div>

        {/* the component below holds the filter option */}
        <Filter />
      </div>
      <div>

      </div>
    </>
  )
}

export default ControlBar

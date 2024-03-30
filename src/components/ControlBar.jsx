import { useContext, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import allData from "../store/index.";

const ControlBar = () => {
  const {data, setData} = useContext(allData);
  const {completeData, setCompleteData} = useContext(allData)
  const searchBox = useRef();

  const search = () => {
    if (searchBox.current.value === "") {
      setData(completeData);
    } else {
      setData(completeData.filter(datum => datum.name.official.toLowerCase().includes(searchBox.current.value)));
      console.log(completeData)
    }
    console.log(completeData.filter(datum => datum.name.official.toLowerCase().includes(searchBox.current.value)))
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-5 sm:py-7 md:py-8 flex flex-col gap-3 md:flex-row justify-between">
      <div className="dark:bg-dark-elements bg-white w-full sm:w-96 flex gap-3 items-center rounded shadow-md dark:shadow-none
      py-2 sm:py-3 px-4 sm:px-6 outline-none text-light-text dark:text-white">
        <IoIosSearch className="dark:text-white text-light-text" />
        <input type="search" ref={searchBox} placeholder="Search for a country" 
        className="outline-none text-light-text dark:text-white w-full bg-transparent" 
        onChange={()=>search()}/>
      </div>
      <div className="bg-white dark:bg-dark-elements w-72 py-2 sm:py-3 px-3 sm:px-5 shadow-md dark:shadow-none">
        {/**The select tag is kept in this div in order to style
         * the select tag in such a way that the padding at each
         * sides will be equal
         */}
        <select className="w-full outline-none bg-transparent text-light-text dark:text-white text-home">
          <option className="dark:bg-dark-elements bg-white">True</option>
          <option className="dark:bg-dark-elements bg-white">True</option>
          <option className="dark:bg-dark-elements bg-white">True</option>
          <option className="dark:bg-dark-elements bg-white">True</option>
          <option className="dark:bg-dark-elements bg-white">True</option>
        </select>
      </div>
    </div>
  )
}

export default ControlBar

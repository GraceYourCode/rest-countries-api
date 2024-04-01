import { IoIosArrowDown } from "react-icons/io";
import Options from "./Options";
import { useContext, useRef, useState } from "react";
import allData from "../store/index.";

const Filter = () => {
  const [showOptions, setShowOptions] = useState(false);

  const { setData } = useContext(allData);

  const { completeData } = useContext(allData);

  const { setRegionData } = useContext(allData);

  const [mutableValue, setMutableValue] = useState("Filter By Region")

  const select = useRef();

  const toggleOPtions = () => setShowOptions(!showOptions); //toggle options in the filter by region

  /**
   * function that controls the filter by region data
   */
  const selectOption = (e) => {
    if (e.textContent === "Filter By Region") setData(completeData);
    else {
      //sets the data displayed on the dom according to the filter
      setData(completeData.filter(datum => datum.region === e.textContent));

      /**
       * stores the data which has been fileredby region
       * so it can be accessed when the user needs to search
       * from a particular region. It is seen in the search bar
       * of the ControlBar component where it is put to use
       */
      setRegionData(completeData.filter(datum => datum.region === e.textContent));
    }
    setShowOptions(false);
    setMutableValue(e.textContent);
  }

  return (
    <div className="relative">
      <button className="bg-white dark:bg-dark-elements flex justify-between items-center text-sm rounded
      w-72 py-2 sm:py-3 px-3 sm:px-5 shadow-md dark:shadow-none text-light-text dark:text-white cursor-pointer"
        onClick={() => toggleOPtions()}>
        <input type="text" value={mutableValue} disabled ref={select}
          className="bg-transparent outline-nonetext-light-text dark:text-white cursor-pointer" />
        <IoIosArrowDown />
      </button>

      {/**this is the container which holds all the options
       * to filter by region
       */}
      {showOptions && <div className="absolute z-50 w-72 py-2 sm:py-3 px-3 sm:px-5 shadow-md dark:shadow-none
      text-light-text dark:text-white bg-white dark:bg-dark-elements mt-2 rounded">
        <Options value="Filter By Region" key={6} setOptions={selectOption} />
        <Options value="Africa" key={1} setOptions={selectOption} />
        <Options value="Americas" key={2} setOptions={selectOption} />
        <Options value="Asia" key={3} setOptions={selectOption} />
        <Options value="Europe" key={4} setOptions={selectOption} />
        <Options value="Oceania" key={5} setOptions={selectOption} />
      </div>}
    </div>
  )
}

export default Filter

import { IoIosArrowDown } from "react-icons/io";
import Options from "./Options";
import { useRef, useState } from "react";

const Filter = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOPtions = () => setShowOptions(!showOptions);

  return (
    <div className="relative">
      <button className="bg-white dark:bg-dark-elements flex justify-between items-center text-sm
      w-72 py-2 sm:py-3 px-3 sm:px-5 shadow-md dark:shadow-none text-light-text dark:text-white cursor-pointer"
      onClick={()=>toggleOPtions()}>
        <input type="text" value="Filter By Region" disabled
          className="bg-transparent outline-nonetext-light-text dark:text-white cursor-pointer" />
        <IoIosArrowDown />
      </button>
     {showOptions && <div className="absolute z-50 w-72 py-2 sm:py-3 px-3 sm:px-5 shadow-md dark:shadow-none
      text-light-text dark:text-white bg-white dark:bg-dark-elements mt-2 rounded">
       <Options value="Africa" key={1} />
       <Options value="America" key={2} />
       <Options value="Asia" key={3} />
       <Options value="Europe" key={4} />
       <Options value="Oceania" key={5} />
      </div>}
    </div>
  )
}

export default Filter

import { IoIosSearch } from "react-icons/io";

const ControlBar = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-5 sm:py-7 md:py-8 flex flex-col gap-3 md:flex-row justify-between">
      <div className="dark:bg-dark-elements bg-white w-full sm:w-96 flex gap-3 items-center rounded shadow-md dark:shadow-none
      py-2 sm:py-3 px-4 sm:px-6 outline-none text-light-text dark:text-white">
        <IoIosSearch className="dark:text-white text-light-text" />
        <input type="search" placeholder="Search for a country" className="outline-none text-light-text dark:text-white w-full bg-transparent" />
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

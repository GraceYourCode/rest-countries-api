import { IoIosSearch } from "react-icons/io";

const ControlBar = () => {
  return (
    <div className="px-20 py-8 flex justify-between">
      <div className="dark:bg-dark-elements bg-white w-96 flex gap-3 items-center rounded shadow-md dark:shadow-none
      py-3 px-6 outline-none text-light-text dark:text-white">
        <IoIosSearch className="dark:text-white text-light-text" />
      <input type="search" placeholder="Search for a country" className="outline-none bg-transparent" />
      </div>
      <div className="bg-white dark:bg-dark-elements w-72 py-3 px-5 ">
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

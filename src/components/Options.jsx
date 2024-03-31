const Options = ({ value, setOptions }) => {
  return (
    <button className="text-light-text dark:text-white text-left
    text-sm w-full bg-transparent outline-none cursor-pointer mb-2" onClick={(e)=>setOptions(e.target)}>
      {value}
    </button>
  )
}

export default Options

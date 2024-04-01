import { Link } from "react-router-dom"

const Button = ({ value }) => {
  return (
    <Link to={`/details/:${value}`} className="outline-none bg-white dark:bg-dark-elements dark:text-white
     py-1.5 w-28 shadow-md rounded text-xs cursor-pointer no-underline text-center text-light-text">
      {value}
    </Link>
  )
}

export default Button

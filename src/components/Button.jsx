import { Link } from "react-router-dom"

const Button = ({ value, cca3 }) => {
  const retrieve = {"code": cca3}
  return (
    <Link to={`/details/:${value}`} state={retrieve} className="outline-none bg-white dark:bg-dark-elements dark:text-white
     py-1.5 px-6 m-auto shadow-md rounded text-xs cursor-pointer no-underline text-center text-light-text">
      {value}
    </Link>
  )
}

export default Button

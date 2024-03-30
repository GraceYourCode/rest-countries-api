const Infomation = ({type, value}) => {
  return (
    <>
      <p className="mt-2 text-sm flex gap-1 items-center">
        <span>{`${type}:`}</span>
        <span>{value}</span>
      </p>
    </>
  )
}

export default Infomation

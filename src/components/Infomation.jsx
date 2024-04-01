const Infomation = ({type, value, font}) => {
  return (
    <>
      <p className={`mt-2 text-${font} flex gap-1 items-center`}>
        <span className="font-semibold">{`${type}:`}</span>
        <span>{value}</span>
      </p>
    </>
  )
}

export default Infomation

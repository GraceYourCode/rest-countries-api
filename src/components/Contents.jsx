import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img from "../store/GLORIOUS EXIT.png"
import Infomation from "./Infomation";
import Button from "./Button";

const Contents = () => {
  const { name } = useParams();
  const [data, setData] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name.slice(1)}?fullText=true`)
      .then(res => res.json)
      .then(sentData => setData(sentData))
      .catch(err => console.error(err));
  })

  return (
    (data ?
      <div className="flex flex-col landscape:lg:flex-row items-center px-8 md:px-16 lg:px-20 portrait:gap-10 gap-20 pb-5">
        <img src={img} alt="{data.flags.alt}"
          className="portrait:w-full portrait:md:w-3/4 w-3/4 landscape:lg:w-2/5" />

        <div className="w-full flex flex-col gap-4">
          <h5 className="text-lg font-bold">{name.slice(1)}</h5>
          <div className="flex portrait:flex-col portrait:md:flex-row landscape:items-center
          portrait:gap-y-6 gap-x-20 landscape:gap-x-10 xl:gap-x-20
          landscape:lg:items-start portrait:md:items-center">
            <div>
              <Infomation type="Native name" value="Belgie" font="xs" />
              <Infomation type="Native name" value="Belgie" font="xs" />
              <Infomation type="Native name" value="Belgie cgcgchycvcvyhhvvv" font="xs" />
              <Infomation type="Native name" value="Belgie" font="xs" />
              <Infomation type="Native name" value="Belgie" font="xs" />
            </div>

            <div>
              <Infomation type="Native name" value="Belgie" font="xs" />
              <Infomation type="Native name" value="Belgie, NAija, Germany" font="xs" />
              <Infomation type="Native name" value="Belgie" font="xs" />
            </div>

          </div>
          <footer className="landscape:flex landscape:lg:block landscape:xl:flex portrait:md:flex gap-2 items-center">
            <p className="font-semibold text-xs portrait:mb-2 portrait:md:mb-0 mb-0 landscape:lg:mb-2 xl:mb-0">Border Countries:</p>
            <div className="flex gap-2">
              <Button value="France" />
              <Button value="Germany" />
              <Button value="Netherlands" />
            </div>
          </footer>
        </div>
      </div> :
      //in case where the api call is still awaiting promise, it displays the p-tag below
      <p className="animate-ping fixed top-1/2 left-1/2 -ml-12 text-light-text dark:text-white">Loading...</p>
    )
  )
}

export default Contents

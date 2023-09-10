import { GiUnderwearShorts } from 'react-icons/gi';
import { FaHouse } from "react-icons/fa6";
import { NavImg, YoutubeImg } from '../../Utills/Constant'
import { useSelector } from 'react-redux'
import store from '../../store/Store'

const SideBar = () => {
  const navigationBar = useSelector(store => store.navigationBar.isOpen)

 //w-4/5  sm:w-3/5 md:w-2/5 lg:w-1/5

  return navigationBar ? (
    <div className='w-[200px] sm:w-[250px] bg-white md:static absolute  p-4 space-y-3 overflow-y-scroll h-full'>
      <div className="space-y-1">
        <p className="flex items-center bg-gray-100 hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Home</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Shorts</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Subscriptions</p>
      </div>
      <div className="border-b "></div>
      <div className="space-y-1">
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Library</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />History</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Your video</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Watch later</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Liked video</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Show more</p>
      </div>
      <div className="border-b "></div>
      <div className="space-y-1">
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Tranding</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Shoping</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Music</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Movie</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Live</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Gaming</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />News</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Sport</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Learing</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />Fation & Beauty</p>
      </div>
      <div className="border-b "></div>
      <div className="space-y-1">
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />YouTube Primium</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />YouTube Studio</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />YouTube Music</p>
        <p className="flex items-center  hover:bg-gray-200 transition-all rounded-xl px-3 py-2"><FaHouse className="mr-7" size='' />YouTube Kids</p>

      </div>
    </div>
  ) : null
}

export default SideBar
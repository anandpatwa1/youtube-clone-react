import React, { useEffect, useState } from 'react'
import VideoCards from './VideoCards'
import { Link } from 'react-router-dom'
import { API_KEY } from '../../Utills/Constant'

function VideoContainer() {
  const api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=${API_KEY}`
  
  const [data, setData] = useState([])

  const getData = async () => {
    const res = await fetch(api)
    const data = await res.json()
    setData(data?.items)
    // console.log(data);
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      {/* <div className="flex flex-wrap "> */}
      <div className=" grid-cols-1 lg:grid-cols-3 sm:grid-cols-2  grid place-items-center">
        {
          data.map(item =>
            <Link  key={item.id} to={"/watchpage?id=" + item.id} className=" w-full rounded-md p-1 space-y-2">
              <VideoCards item={item} />
            </Link>)
        }
      </div>
    </div>
  )
}

export default VideoContainer

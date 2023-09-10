import { FaReply } from 'react-icons/fa6';
import { useSearchParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

function VideoAndComment() {
  const [videoId] = useSearchParams();
  const id = videoId.get('id');

  const api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyAz_gp6iHyCsYNiB1YT4rXe6fERIsoHfRM`;

  const [data, setData] = useState([]);

  const snippet = data[0]?.snippet;
  const statistics = data[0]?.statistics;

  const getData = async () => {
    const res = await fetch(api);
    const data = await res.json();
    setData(data?.items);
  };

  // console.log(data);
  //   const { snippet, statistics } = data
  //     const { channelTitle, title } = snippet

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className=" flex flex-col  py-5">
      <iframe
        className="w-full h-60 sm:h-96"
        width="560"
        height="315"
        src={'https://www.youtube.com/embed/' + id}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h1 className="text-lg text-black font-semibold">{snippet?.title}</h1>
      <div className="mt-4 space-y-3 sm:flex justify-between">
        <div className="items-center flex space-x-4 ">
          <div className="place-items-center grid ">
            <img
              className="h-10 rounded-full "
              src="https://yt3.ggpht.com/A_3mLbY1nzH3MPjzEftkO8LK02HazD4PWy9XbwLDQ4hDkbBCla4EkcVNM0kZDTeMWqNCD4jVbA=s68-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div className=" space-y-1">
            <p className="font-semibold text-sm">{snippet?.channelTitle}</p>
            <p className=" text-xs">2.98K subscribers</p>
          </div>
          <button className="h-8 bg-black hover:bg-gray-900 text-white rounded-full px-3 text-sm font-semibold">
            Subscribe
          </button>
        </div>
        <div className=" flex space-x-3">
          <div className="">
            <button className="px-5 text-sm py-2 rounded-l-full bg-gray-200 ">
              {statistics?.likeCount}
            </button>
            <span className="bg-gray-200 py-2 text-gray-600">|</span>
            <button className="px-5 text-sm py-2 rounded-r-full bg-gray-200 ">
              7K
            </button>
          </div>
          <button className="px-5 flex items-center space-x-3 text-sm py-2 rounded-full bg-gray-200 ">
            <FaReply className="inline" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoAndComment;

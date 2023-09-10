import React from 'react';

const VideoCards = ({ item }) => {
  const { snippet, statistics } = item;
  const { thumbnails, channelTitle, title } = snippet;


  return (
    <>
      {/* <div className="w-full h-full"> */}
        <img
          className="rounded-lg h-full"
          src={thumbnails?.maxres?.url}
          alt="Video Image"
        />
      {/* </div> */}
      <div className="card-content flex space-x-4">
        {/* <div className="left-channel-img">

                        <img className='w-20 rounded-full ' src="https://yt3.ggpht.com/A_3mLbY1nzH3MPjzEftkO8LK02HazD4PWy9XbwLDQ4hDkbBCla4EkcVNM0kZDTeMWqNCD4jVbA=s68-c-k-c0x00ffffff-no-rj" alt="" />

                    </div> */}
        <div className="right-content space-y-1">
          <h1 className="text-base text-black font-semibold">{title}</h1>
          <p className="text-sm">{channelTitle}</p>
          <span className="flex text-sm space-x-4">
            <p>{statistics.viewCount} views</p>
            <p>18 minutes ago</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default VideoCards;

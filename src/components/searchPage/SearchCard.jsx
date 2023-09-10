import React from 'react';

const SearchCard = ({ data }) => {
  const { snippet } = data;
  const { title, thumbnails, channelTitle } = snippet;

  console.log(data.id.videoId);

  // console.log(data)
  return (
    <>
      <div className="img w-[30rem]">
        <img
          className="rounded-md w-full h-full   "
          src={thumbnails.medium.url}/>
      </div>
      <div className="content space-y-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        <span className="flex space-x-2 text-base text-gray-600">
          {' '}
          <p>52k</p> <p>14 hours</p>{' '}
        </span>
        <p className="text-lg text-gray-600">{channelTitle}</p>
      </div>
    </>
  );
};

export default SearchCard;

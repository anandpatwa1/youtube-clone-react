import React, { useEffect, useState } from 'react';
import { API_KEY, NavImg, YoutubeImg, userImg } from '../Utills/Constant';
import {
  FaSistrix,
  FaMicrophone,
  FaVideo,
  FaRegBell,
  FaMagnifyingGlass,
} from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { isToggle } from '../store/sideBarSlice';
import { Link, useNavigate } from 'react-router-dom';
import searchSlice, { fillQueary } from '../store/searchSlice';

const Head = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [suggestedQuerie, setSuggestedQuerie] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => handleSuggest(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [suggestedQuerie]);

  const [suggestedData, setSuggestedData] = useState([]);
  const handleSuggest = async () => {
    const data = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${suggestedQuerie}`
    );
    const suggestedData = await data.json();
    setSuggestedData(suggestedData[1]);
  };

  const handleNavigationBar = () => {
    dispatch(isToggle(handleNavigationBar));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (suggestedQuerie === '') {
    } else {
      let query = suggestedQuerie;
      dispatch(fillQueary(query));
      navigator('/SearchPage');
      setSuggestedQuerie('');
    }
  };

  return (
    <>
      <nav className="navbar shadow-lg px-5 py-2 flex justify-between h-[9vh]">
        <div className="flex space-x-4 items-center">
          <img
            onClick={handleNavigationBar}
            className="h-5 font-bold cursor-pointer"
            src={NavImg}
            alt=""
          />
          <Link to={'/'}>
            <img className="h-7 cursor-pointer" src={YoutubeImg} alt="" />
          </Link>
        </div>
        <div className="flex items-center w-1/2 space-x-3 ">
          <div className="relative w-full">
            <form
              onSubmit={handleSearch}
              className="border border-gray-300 border-1 flex rounded-full w-full  "
            >
              <input
                value={suggestedQuerie}
                onBlur={() => setSuggestedQuerie('')}
                onChange={(e) => setSuggestedQuerie(e.target.value)}
                className="  rounded-l-full px-4 py-2 w-full"
                type="text"
                placeholder="Search"
              />
              <button
                type="submit"
                className=" rounded-r-full px-4 py-2 bg-gray-200 hover:bg-gray-300 animate-pulse"
              >
                <FaSistrix />
              </button>
            </form>
            {/* {showSuggestion && ( */}
            <ul className="absolute bg-zinc-50 w-full rounded-md">
              {suggestedData.map((text, i) => {
                return (
                  <li key={i}>
                    <hr />
                    <div
                      onClick={(e) => setSuggestedQuerie(e.target.textContent)}
                      className="flex space-x-2 items-center cursor-pointer hover:bg-zinc-200 px-4 p-2.5"
                    >
                      <FaMagnifyingGlass />
                      <p>{text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            {/* )} */}
          </div>
          <FaMicrophone className="h-10 w-10 p-2 hidden sm:inline  hover:bg-gray-300 rounded-full" />
        </div>
        <div className="flex space-x-4 items-center">
          <FaVideo className="h-9 w-9 p-2 hidden sm:inline hover:bg-gray-300 rounded-full cursor-pointer overflow-visible " />
          <FaRegBell className="h-9 w-9 p-2 hidden sm:inline hover:bg-gray-300 rounded-full cursor-pointer" />
          <img
            className="h-7 cursor-pointer rounded-full"
            src={userImg}
            alt=""
          />
        </div>
      </nav>
    </>
  );
};

export default Head;

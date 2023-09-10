import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { API_KEY } from '../../Utills/Constant';
import SearchCard from './SearchCard';
import { Link, useNavigate } from 'react-router-dom';

function SearchPage() {
  const navugate = useNavigate();
  const { searchInput: query } = useSelector((store) => store.search);

  const [searchedVideos, setSearchValues] = useState([]);

  useEffect(() => {
    handleSearch();
  }, [query]);
  const handleSearch = async () => {
    if (query === '') {
      navugate('/');
    } else {
      const api = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1000&q=${query?query:'funny videos'}&key=${API_KEY}`;
      const data = await fetch(api);
      const result = await data.json();
      setSearchValues(result?.items);
      console.log(query);
    }
  };
  useEffect(()=>{
    handleSearch()
  },[])

  return (
    <>
      {searchedVideos.map((data) => (
        <Link
          to={'/watchpage?id=' + data.id.videoId}
          className="search-cards flex m-5 mx-8 space-x-6"
        >
          <SearchCard data={data} />
        </Link>
      ))}
    </>
  );
}
export default SearchPage;

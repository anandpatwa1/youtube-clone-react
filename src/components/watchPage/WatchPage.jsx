import React, { useEffect } from 'react';
import SuggestedVideo from './SuggestedVideo';
import VideoAndComment from './VideoAndComment';
import { useDispatch } from 'react-redux';
import { isToggle } from '../../store/sideBarSlice';
import AllComments from './comments/AllComments';
  
function WatchPage() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(isToggle());
  // }, []);

  return (
    <div className="lg:flex px-2 sm:px-8">
      <div className="w-full lg:w-4/6">
      <VideoAndComment />
      anasdnasflsdf;lh 
      <AllComments />
      </div>
      {/* <SuggestedVideo /> */}
    </div>
  );
}

export default WatchPage;

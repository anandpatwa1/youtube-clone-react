import React from 'react'
import TrandingTopic from '../TrandingTopic'
import VideoContainer from '../Home/VideoContainer'
import SearchPage from '../searchPage/SearchPage'

function SuggestedVideo() {
  return (
    <div className='w-full lg:w-2/6'>
      <TrandingTopic/>
      <SearchPage/>
    </div>
  )
}

export default SuggestedVideo

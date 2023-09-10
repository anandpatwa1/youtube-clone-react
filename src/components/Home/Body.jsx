import React from 'react'
import SideBar from './SideBar'
import TrandingTopic from '../TrandingTopic'
import VideoContainer from './VideoContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <>
      <div className="flex h-[91vh] gap-4 ">
        <SideBar />
        <div className='overflow-y-scroll h-full w-screen '>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Body
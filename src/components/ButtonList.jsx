import React from 'react'

const ButtonList = ({name}) => {
  return (
    <>
        <button className='px-3 text-sm  focus:bg-black focus:text-white py-1 rounded-lg bg-gray-200 mx-2'>{name}</button>
    </>
  )
}

export default ButtonList
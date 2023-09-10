import React, { useState } from 'react'
import ButtonList from './ButtonList'

function TrandingTopic() {
  const [buttons, setButtons] = useState([
    "All", "Music", "Gaming", "Cricket", "Sports", "Web Development", "Vlogs", "Podcast", "Shows",
    "All", "Music", "Gaming", "Cricket", "Sports", "Web Development", "Vlogs", "Podcast", "Shows"
  ])
  return (
    <div className="button-parent w-full overflow-x-scroll button-scroll">
    <div className="button-container w-max py-5   ">


      {
        buttons.map((name , i) => {
          return (
            <ButtonList key={i} name={name} />
          )
        })
      }


    </div>
  </div>
  )
}

export default TrandingTopic

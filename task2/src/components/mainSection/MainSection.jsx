import React from 'react'
import './MainSection.css'
import Phones from '../phones/Phones'
import Advert from '../advert/Advert'

const MainSection = ({setApplicant}) => {
  return (
    <main>
      <Phones/>
      <Advert setApplicant={setApplicant}/>
    </main>
  )
}

export default MainSection

import { useState } from 'react'
import './App.css'
import Accordion from './components/accordian/index.jsx'
import RandomColour from './components/random-color/index.jsx'  
import StarRating from './components/star-rating/index.jsx'
import ImageSlider from './components/image-slider/index.jsx' 
import JustCSS from './components/tryingGround/index.jsx'         
function App() {


  
  return (
    <>
     <Accordion/>
      <RandomColour />
      <StarRating />
      <ImageSlider url={"https://api.unsplash.com/photos/random?query=nature&count=10&client_id=XjTpH6ze_sfw3tE--Y5lUO3Yq_TRv8LpR7GMgmRm-eg "
} />
      <JustCSS />
     </>
  )
}
export default App

import React, { useState } from 'react'


import Banner from '../components/Banner'
import Precios from '../components/Precios'
import SearchExercises from '../components/SearchExercises'
import Footer from '../components/Footer'
import Exercises  from '../components/Exercises'
import MiRutina from '../components/MiRutina'


export default function Home() {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return(
      <div>
        <Banner/>
  
        <MiRutina/>
        <SearchExercises setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}/>
        <Exercises exercises={exercises}
        setExercises={setExercises} 
        bodyPart={bodyPart} />
        <Footer/>
      </div>  
      )
}

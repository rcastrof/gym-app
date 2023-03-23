import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import { useRutina } from '../contexts/RutinaContext'
import RutinaCard from './RutinaCard'

const MiRutina = () => {

  const { rutina, removeExercise } = useRutina()
  const ref = useRef()
  
  return (
    <div>
      <div ref={ref} className=' bg-green-300 flex flex-wrap p-5 m-8 rounded-xl text-center'>
       {rutina.rutina.map((rutina) => (
          <RutinaCard key={rutina.id} rutina={rutina} removeExercise= {removeExercise}/>
        ))}
      </div>
      <ReactToPrint  
      trigger={() => <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>Imprimir</button>}
      content={() => ref.current}
      />
    </div>
  )
}

export default MiRutina
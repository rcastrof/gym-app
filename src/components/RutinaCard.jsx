import React from 'react'

const RutinaCard = ({rutina, removeExercise}) => {
  return (
        
    <div className='flex flex-col items-center w-1/3 border capitalize bg-green-600 rounded-md p-5'>
      <img src={rutina.gifUrl} alt={rutina.name} loading="lazy" />
      <h1 className='text-2xl text-emerald-800 pb-10 pt-4'>{rutina.bodyPart}</h1>
      <p className='text-gray-600'>{rutina.target}</p>
      <h1>{rutina.name}</h1>
      <button onClick={() => removeExercise(rutina.id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>
      Eliminar
      </button>
    </div>
          
  )
}

export default RutinaCard
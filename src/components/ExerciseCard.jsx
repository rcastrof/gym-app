import React from 'react'

const ExerciseCard = ({exercise,addExercise}) => {
  return (
        <div className='flex flex-col items-center w-1/3 border capitalize bg-green-600 rounded-md p-5'>
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>

            <h1 className='text-2xl text-emerald-800 pb-10 pt-4'>{exercise.bodyPart}</h1>
            <p className='text-gray-600'>{exercise.target}</p>
            <h1>{exercise.name}</h1>
          <button 
           onClick={() => addExercise(exercise)}
            className='bg-green-900 p-2 rounded-md hover:bg-green-500'>Agregar a mi rutina</button>
        </div>
  )
}

export default ExerciseCard
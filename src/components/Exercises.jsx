import React from 'react'
import { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '@/utils/fetchData'
import ExerciseCard from '@/components/ExerciseCard'
import Pagination from './Pagination'
import { useRutina } from '@/contexts/RutinaContext'

const Exercises = ({ exercises, setExercises, bodyPart }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const [exercisesPerPage, setExercisesPerPage] = useState(9)
  const { addExercise } = useRutina()

  useEffect(() => {
    const fetchExecisesData = async () => {
      let exercisesData =[]
      if(bodyPart === 'all') {
        exercisesData = await fetchData
        ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      } else {
        exercisesData = await fetchData
        (`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }
      setExercises(exercisesData)
    }
    fetchExecisesData()
  }, [bodyPart])

  const lastPostIndex = currentPage * exercisesPerPage
  const firstPostIndex = lastPostIndex - exercisesPerPage

  const currentExercises = Array.isArray(exercises) ? exercises.slice(firstPostIndex, lastPostIndex) : [];


  return (
    <div className='flex-row'>
      <div className='bg-green-300 flex flex-wrap p-5 m-8 rounded-xl'>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} addExercise={addExercise} />
        ))}
      </div>
      <Pagination
        totalPosts={exercises.length}
        exercisesPerPage={exercisesPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Exercises
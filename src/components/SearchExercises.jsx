import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '@/utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {

  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExecisesData = async () => {
      const bodyPartsData = await fetchData
      ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExecisesData()

  }, [])


  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData
      ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)

        )
        setSearch('')
        setExercises(searchedExercises)
    }
  }

  


  return (
    <div>
      <div className='text-center'>
      <h1 className='text-6xl text-emerald-800 pb-10 pt-4'> Crea tu rutina</h1>
      <input  
        className='text-black text-4xl'
        placeholder='Buscar Ejercicios'
        value={search}
        type='text'
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button
        className='text-xl bg-green-700 rounded-md p-2 m-2 hover:bg-green-400'
        onClick={handleSearch}
        >Buscar</button>
      </div>
        
      <div>
      <HorizontalScrollBar data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} />
      </div>
    </div>
  )
}

export default SearchExercises
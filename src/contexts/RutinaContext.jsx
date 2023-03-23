import React, { createContext, useContext, useEffect, useState } from 'react'


const initRutina = {
    rutina:[]
}

export const RutinaContext = createContext(initRutina)

const getInitialState = () => {
  if (typeof window === 'undefined') return initRutina
  const rutina = localStorage.getItem('rutina')
  return rutina ? JSON.parse(rutina) : initRutina
}

const RutinaContextProvider = (props) => {
  const [rutina, setRutina] = useState(getInitialState)

  useEffect(() => {
    localStorage.setItem('rutina', JSON.stringify(rutina))
  }, [rutina])

  const addExercise = (exercise) => {
    setRutina((prev) => ({
      ...prev,
      rutina: [...prev.rutina, exercise],
    }))
  }

  const removeExercise = (exerciseId) => {
    setRutina((prev) => ({
      ...prev,
      rutina: prev.rutina.filter((exercise) => exercise.id !== exerciseId),
    }))
  }

  return (
    <RutinaContext.Provider value={{ rutina, addExercise , removeExercise}}>
      {props.children}
    </RutinaContext.Provider>
  )
}

export const useRutina = () => useContext(RutinaContext)

export default RutinaContextProvider
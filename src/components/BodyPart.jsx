import React from 'react'

const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
        <button 
        className=' '
        onClick={()=>{
            setBodyPart(item)
        }}
        >{item}</button>
  )
}

export default BodyPart
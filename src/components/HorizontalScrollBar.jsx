import React from 'react'
import BodyPart from './BodyPart';


const HorizontalScrollBar = ({data,bodyPart,setBodyPart}) => {
  return (
        <div className='flex flex-row justify-center p-8 bg-green-300 rounded-md m-8 '>
            {data.map((item) => (
                <div 
                className='bg-green-700 rounded-md p-2 m-2 text-2xl w-1/11 hover:bg-green-400 '
                key={item.id || item}
                itemID={item.id || item}
                title={item.title || item}
                >
                    <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
                </div>
            ))}
            
        </div>
  )
}

export default HorizontalScrollBar
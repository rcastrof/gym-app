import React from 'react'

const Pagination = ({totalPosts,exercisesPerPage, setCurrentPage, currentPage}) => {
    let pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / exercisesPerPage); i++) { // ceil redondea hacia arriba
        pageNumbers.push(i)
    }

  return (
    <div className='pagination'>
        {pageNumbers.map((page, index) => {
            return <button onClick={()=>setCurrentPage(page)} key={index} 
            className={page== currentPage ? 'active' : ''} >{page}</button>
        })}
        </div>
  )
}

export default Pagination
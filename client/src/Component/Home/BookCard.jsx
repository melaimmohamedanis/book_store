import React from 'react'

import SingleBookComponents from './SingleBookComponents';
const BookCard = ({books}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {books.map((item)=>(
 <SingleBookComponents key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default BookCard
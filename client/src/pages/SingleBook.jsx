import React , {useEffect,useState}from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../Component/BackButton';
import Spiner from '../Component/Spiner';
const SingleBook = () => {
  const [book,setBook]=useState({});
  const [loading,setLoading]=useState(false);
  const {id}=useParams();
  console.log("id1",id);
   console.log("id2",{id});
  useEffect(() => {
   setLoading(true);
   axios
   .get(`https://server-u5b8.onrender.com/books/${id}`)
  
    .then ((response) => {
      setBook(response.data)
      setLoading(false);
       console.log("data",response.data);
    }).catch((error)=>{
      console.log(error);
      setLoading(false);
    })
  }, [])
 // console.log(book)
  return (
    <div className='p-4'>
      <BackButton/>
        <BackButton/>
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (<Spiner/>
      ):(
         book ? (<div className="flex flex-col border-2
         border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className='text-xl mr-4 text-gray-500'>Id</span>
        <span>{book._id}</span>
          </div>

          <div className="my-4">
            <span className='text-xl mr-4 text-gray-500'>Title</span>
        <span>{book.title}</span>
          </div>
       
          <div className="my-4">
            <span className='text-xl mr-4 text-gray-500'>Author</span>
        <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className='text-xl mr-4 text-gray-500'>PublishYear</span>
        <span>{book.publishYear}</span>
          </div>
       
          <div className="my-4">
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
        <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className='text-xl mr-4 text-gray-500'>Update Time</span>
        <span>{new Date(book.updatedAt).toString()}</span>
          </div>
       

         </div>):( <h1>no book</h1> )
      )}
    </div>  )
}

export default SingleBook

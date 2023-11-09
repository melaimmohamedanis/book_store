import React,{useState} from 'react'
import axios from "axios";
import Spiner from '../Component/Spiner';
import { useNavigate,useParams } from 'react-router-dom';
import BackButton from '../Component/BackButton';
//onClick={()=>handleDelete({id:book._id})}
const DeleteBook = () => {
    const navigate=useNavigate();
    const [loading,setLoading]=useState('');
    const {id}=useParams();
    const handleDelete=()=>{
         setLoading(true);
         axios.delete(`https://server-u5b8.onrender.com/${id}`)
         .then(()=>{
           setLoading(false);
           navigate('/');
         }).catch((error)=>{
           setLoading(false);
           alert('An error happened ,Please CHeck console')
           console.log(error)
         })
       }
  return (
    <div className='p-4'>
        <BackButton/>
        <h className="text-3xl my-4">Delete Book</h>
        {loading ? <Spiner/>:""}
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[200px]-p-8 mx-auto">
            <h3 className="text-2xl">Are You Sure Want to delete this book?</h3>
            <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDelete}>Yes,Delete it</button>
        </div>
    </div>
  )
}

export default DeleteBook

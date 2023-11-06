import React, {useEffect,useState} from 'react';
import axios from "axios";
import Spiner from "../Component/Spiner"
import {Link, useActionData, useNavigate} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'
import BookCard from '../Component/Home/BookCard';
import BookTable from '../Component/Home/BookTable';
const Home = () => {
  const [books,setBooks]=useState([]);
  const [loading,setLoading]=useState(false);
  const [showlist,setShowList]=useState(false);
  useEffect(()=>{
    setLoading(true);
    axios
    .get('https://new-mern-server.vercel.app/books,headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true)
    .then((response)=>{
      setBooks(response.data.data);
      setLoading(false);
    //  console.log(response.data.data)
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
    });
  },[]);
  const navigate=useNavigate();
 
console.log("books",books)
  return (
    
    <div className='p-4'> 
    <div className="flex justify-center items-center gap-x-4">
      <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={()=>setShowList(true)}>list</button>
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={()=>setShowList(true)}>list</button>
      <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={()=>setShowList(false)}>card</button>
 
    </div>
     <div className='flex justify-between items-center'>
     
      <h1 className='text-3xl my-8'>Book List</h1>
    <Link to='/createbook'>
    <MdOutlineAddBox className='text-sky-800 text-4xl'/>
    </Link>
    </div>
    {loading ?(
      <Spiner></Spiner>
    ):( showlist==true ? (<BookTable books={books}/>): (<BookCard books={books}/>)
    
    )}
    </div>
  )
}

export default Home

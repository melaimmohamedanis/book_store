import React,{useState,useEffect} from 'react';
import BackButton from '../Component/BackButton';
import Spiner from '../Component/Spiner';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
const UpdateBook = () => {
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const [publishYear,setPublishYear]=useState();
  const [loading,setLoading]=useState('');
  const navigate=useNavigate();
  const {id}=useParams();
  useEffect(() => {
    setLoading(true);
    axios.get(`https://server-u5b8.onrender.com/books/${id}`)
    .then((response)=>{
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      setLoading(false);
    }).catch((error)=>{console.log(error)
      setLoading(false);
      alert('An error happened ,Please CHeck console')
     
    })
  }, [])
  
  const handleEdit=()=>{
    const data={
      title,
      author,
      publishYear,
    };setLoading(true);
    axios.put(`https://new-mern-server4.vercel.app/${id}`,data)
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
      <h1 className='text-3xl my-4'>Create Book</h1>
{loading ? <Spiner/>:(
  <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
    <div className="my-4">
      <label  className="text-xl mr-4 text-gray-500">Title</label>
   <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
    </div>
    <div className="my-4">
      <label  className="text-xl mr-4 text-gray-500">Author</label>
   <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} />
    </div>

    <div className="my-4">
      <label  className="text-xl mr-4 text-gray-500">PublishYear</label>
   <input type="text" value={publishYear} onChange={(e)=>setPublishYear(e.target.value)} />
    </div>

    <button className='p-2 bg-sky-300 m-8' onClick={handleEdit}>Update</button>

  </div>
) }

    </div>
  )
}

export default UpdateBook

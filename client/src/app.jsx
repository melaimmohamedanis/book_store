import React from 'react'
import {Routes,Route} from 'react-router-dom';
import CreateBook from './pages/CreateBook';
import Home from './pages/Home';
import DeleteBook from './pages/DeleteBook';
import UpdateBook from './pages/UpdateBook';
import SingleBook from './pages/SingleBook';
const App = () => {
  return (
    <Routes>
      <Route path='/createbook' element={<CreateBook/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/deletebook/:id' element={<DeleteBook/>}></Route>
      <Route path='/updatebook/:id' element={<UpdateBook/>}></Route>
      <Route path='/singlebook/:id' element={<SingleBook/>}></Route>
    </Routes>
   
  )
}

export default App

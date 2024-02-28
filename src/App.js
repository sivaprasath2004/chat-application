
import React from 'react';
import Chat from './chat';
import Login from './Login';
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import './App.css'
const App = () => {
  return (
<>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/chat' exact element={<Chat/>}/>
    </Routes>
  </>
  );
};
export default App;
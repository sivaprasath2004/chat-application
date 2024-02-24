
import React from 'react';
import Chat from './chat';
import Login from './Login';
import ChatComponent from './chatting';
import {Routes,Route,Link} from 'react-router-dom'

const App = () => {
  

  return (
    <>
<nav>
  <Link to='/login'>Login</Link>
  <Link to='/chat'>Chat</Link>
  <Link to='/chatting'>Chatting</Link>
</nav>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/chatting' element={<ChatComponent/>}/>

    </Routes>
    
    </>
  );
};

export default App;

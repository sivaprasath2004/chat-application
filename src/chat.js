import React, { useState} from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:8000'); 
const Chat = () => {
    const name=localStorage.getItem('name')
    const room=localStorage.getItem('room')
    console.log(name,room)
    const [message, setMessage] = useState('');

//   useEffect(() => {
//     socket.on('message', (data) => {
//       setMessages([...messages, data]);
//     });

//     return () => {
//       socket.off('message');
//     };
//   }, [messages]);

  const sendMessage = () => {
    socket.emit('message', {name:name,room:room});
    setMessage('');
  };
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default Chat

 // const search=window.location.search
    // const params=new URLSearchParams(search)
    // const name=params.get('name')
    // const room=params.get('room')
    // console.log(name,room)
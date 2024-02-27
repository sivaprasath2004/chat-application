import React, { useState,useEffect,useRef} from 'react';
import io from 'socket.io-client';
let socket
const Chat = () => {
  const[message,setMessage]=useState([])
  const [user,setUser]=useState({notification:false})
  const containerRef=useRef(null)
  let socketUrl='http://localhost:8000'
  useEffect(() => {
    const search=window.location.search
    const params=new URLSearchParams(search)
    const name=params.get('name')
    const room=params.get('room')
    socket = io(socketUrl);
    setUser(pre=>({...pre,name:name,room:room}))
    console.log('name,room',name,room)
    socket.emit('join', {name:name,room:room},(err) => {
     if(err){
      alert(err)
     }
    });
    return ()=>{
      socket.disconnect()
      socket.off()
    }
  }, []);
  useEffect(()=>{
    containerRef.current.scrollTop=containerRef.current.scrollHeight;
  },[message])
  useEffect(()=>{
    socket.on('message',msg=>{
      setMessage(pre=>[...pre,msg])
    })
  },[])
  function handleKeyPress(event){
    if(event.key==='Enter'){
      console.log('pressed')
    if(user.sendMes?.length>1){
      setUser(pre=>({...pre,sendMes:undefined}))
      socket.emit('sendMes',user.sendMes,()=>{
      })
    }
  }
}

  return (
    <div style={{display:'flex',position:'relative',flexDirection:'column',height:'100vh',width:'100%'}}>
      
      <div style={{height:50,width:'100%',left:0,backgroundColor:'black',display:'flex',gap:20,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',position:'fixed',top:0}}>
      <img style={{height:30,width:30,paddingLeft:10,filter:'invert(1)'}} src='https://cdn-icons-png.flaticon.com/128/64/64572.png' alt='user' />
        <h1 style={{color:'white',fontSize:22}}>{user.name===undefined?'NewUser':user.name}</h1>
      </div>
      <div  style={{display:'flex',flexWrap:'wrap',height:'100%',position:'relative'}}>
      <div ref={containerRef} style={{height:'82%',overflowX:'hidden',width:'100%',left:0,marginTop:50,overflowY:'scroll',position:'fixed'}}>
      {
          message.map((item,index)=>(
            <div key={`parent${index}`} style={{display:'flex',margin:20,justifyContent:item.user==="admin"?'center':item.user===user.name?'right':'left'}}>
            <h2 key={index} style={{maxWidth:'60%',height:'auto',fontSize:18,color:item.user==="admin" && item.text.split('join')[1]===undefined?"red":item.user==="admin"?'green':'black',backgroundColor:item.user==="admin"?'transparent':item.user===user.name?'rgb(181, 189, 189)':'lightseagreen',wordWrap:'break-word',padding:10,boxShadow:item.user==="admin"?'none':'0 2px 10px rgba(0,0,0,0.5)',borderRadius:10}} id={item.user==="admin"?'NoChange':item.user===user.name?'sender':'Receiver'}>{item.text}</h2>
        </div>
        ))}
<div style={{position:'absolute',borderRadius:5,bottom:'2%',left:'1%',right:'1%',minHeight:40,width:'98%',backgroundColor:'whitesmoke',border:'1px solid black',position:'fixed',display:'flex',justifyContent:'center',alignItems:'center'}}>
<input
style={{height:'95%',width:'100%',backgroundColor:'transparent',fontSize:18,marginLeft:10,marginRight:10,border:'none'}}
type='text'
value={user.sendMes===undefined?'':user.sendMes}
placeholder='Type to send'
onChange={e=>setUser(pre=>({...pre,sendMes:e.target.value}))}
onKeyPress={handleKeyPress}
/>
<div style={{height:'100%',border:'none',display:'flex',justifyContent:'center',alignItems:'center'}}>
  <button style={{backgroundColor:'#613f3f',border:'none',display:'flex',justifyContent:'center',alignItems:'center'}} onClick={()=>handleKeyPress({key:'Enter'})}><img src='https://cdn-icons-png.flaticon.com/128/11049/11049074.png' style={{height:40,rotate:'45deg',width:40,objectFit:'contain'}}/></button>
</div>

</div>
      </div>
      </div>
    </div>
  )
}

export default Chat

 
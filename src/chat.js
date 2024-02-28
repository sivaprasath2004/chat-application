import React, { useState,useEffect,useRef} from 'react';
import io from 'socket.io-client';
let socket
let socketUrl='http://localhost:8000'
const Chat = () => {
  const[message,setMessage]=useState([])
  const [user,setUser]=useState({notification:false})
  const containerRef=useRef(null)
  useEffect(() => {
    const search=window.location.search
    const params=new URLSearchParams(search)
    const name=params.get('name')
    const room=params.get('room')
    socket = io(socketUrl);
    setUser(pre=>({...pre,name:name,room:room}))
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
      setMessage(pre=>[...pre,{user:msg.user,text:msg.text,time:time()}])    
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
function time(){
  const Time=new Date()
  const hours=Time.getHours()
  const mins=Time.getMinutes()
  const AMPM=hours>=12?'Pm':'Am'
  let hour=hours<=12?hours:hours-12
  let min=mins<10?'0'+mins:mins
  return `${hour}:${min} ${AMPM}`
}
  return (
    <div style={{display:'flex',position:'relative',flexDirection:'column',height:'100vh',width:'100%'}}>
      
      <div style={{height:50,width:'100%',left:0,backgroundColor:'black',display:'flex',gap:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center',position:'fixed',top:0}}>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:20}}>
      <img style={{height:30,width:30,paddingLeft:10,filter:'invert(1)'}} src='https://cdn-icons-png.flaticon.com/128/64/64572.png' alt='user' />
        <h1 style={{color:'white',fontSize:22}}>{user.name===undefined?'NewUser':user.name}</h1>
      </div>
      </div>
      <div  style={{display:'flex',flexWrap:'wrap',height:'100%',position:'relative'}}>
      <div ref={containerRef} style={{height:'82%',overflowX:'hidden',width:'100%',left:0,marginTop:50,overflowY:'scroll',position:'fixed'}}>
      {
          message.map((item,index)=>(
            <div key={`parent${index}`} style={{display:'flex',margin:20,justifyContent:item.user==="admin"?'center':item.user===user.name?'right':'left'}}>
            <h2 key={index} style={{width:item.text.length>4?'none':30,maxWidth:item.user==="admin"?'90%':'60%',height:'auto',fontSize:item.user==='admin'?13:14,color:item.user==="admin" && item.text.split('join')[1]===undefined?"red":item.user==="admin"?'green':'black',backgroundColor:item.user==="admin"?'transparent':item.user===user.name?'rgb(181, 189, 189)':'lightseagreen',wordWrap:'break-word',padding:10,borderRadius:10,position:'relative'}} id={item.user==="admin"?'NoChange':item.user===user.name?'sender':'Receiver'}>{item.text}<span key={`time${index}`} style={{position:'absolute',bottom:2,right:item.user==='admin'?'40%':'10%',zIndex:2,fontSize:8}}>{item.time}</span></h2>
        </div>
        ))}
<div style={{bottom:'2%',left:'1%',right:'1%',minHeight:40,width:'98%',backgroundColor:'whitesmoke',borderRadius:25,position:'fixed',display:'flex',justifyContent:'center',alignItems:'center',boxShadow:'0 2px 12px rgba(0,0,0,0.5)'}}>
<input
style={{height:'95%',width:'100%',backgroundColor:'transparent',fontSize:15,marginLeft:10,marginRight:10,border:'none'}}
type='text'
value={user.sendMes===undefined?'':user.sendMes}
placeholder='Type to send'
onChange={e=>setUser(pre=>({...pre,sendMes:e.target.value}))}
onKeyPress={handleKeyPress}
/>
<div style={{height:'100%',border:'none',display:'flex',justifyContent:'center',alignItems:'center'}}>
  <button style={{backgroundColor:'black',minHeight:35,minWidth:35,marginRight:10,border:'none',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}} onClick={()=>handleKeyPress({key:'Enter'})}><img src='https://cdn-icons-png.flaticon.com/128/11049/11049074.png' style={{height:25,rotate:'35deg',width:25,objectFit:'contain'}} alt='send' /></button>
</div>

</div>
      </div>
      </div>
    </div>
  )
}

export default Chat

 
import React,{useState} from 'react'
import { Link} from 'react-router-dom'
const Login = () => {
    const [checker,setChecker]=useState({})
  return (
   <div id='home_page'  style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
    <form style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <div style={{display:'flex',flexDirection:'column',position:'relative',justifyContent:'center',alignItems:'center',maxWidth:'80%',minWidth:'40%',height:300,padding:20,backgroundColor:'cyan'}}>
      <div id='background'> </div>
    <h1>Login Room</h1>
        <input type='text' onChange={(e)=>setChecker(pre=>({...pre,name:e.target.value}))}/>
        <input type='text' onChange={(e)=>setChecker(pre=>({...pre,password:e.target.value}))}/>  
        <Link  onClick={(e)=>(!checker.name || !checker.password)?e.preventDefault():null}
        to={`/chat?name=${checker.name}&room=${checker.password}`}>
        <input type='submit' value={`submit`} /></Link>
    
    </div></form>
   </div>
  )
}

export default Login
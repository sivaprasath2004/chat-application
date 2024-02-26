import React,{useState} from 'react'
import { Link} from 'react-router-dom'
const Login = () => {
    const [checker,setChecker]=useState({})
  return (
   <div id='home_page'  style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
    <form style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <div id="background_circle">
    <div className='circle'></div>
   <div className='form'> <h1>Login Room</h1>
        <input placeholder='User name' className='name' type='text' onChange={(e)=>setChecker(pre=>({...pre,name:e.target.value}))}/>
        <input placeholder='Room Id' className='room' type='text' onChange={(e)=>setChecker(pre=>({...pre,password:e.target.value}))}/>  
        <Link  onClick={(e)=>(!checker.name || !checker.password)?e.preventDefault():null}
        to={`/chat?name=${checker.name}&room=${checker.password}`}>
        <input type='submit' value={`submit`} /></Link>
        <div id='star'></div>
        <div id='stars'></div>
        </div>
    </div></form>
   </div>
  )
}

export default Login
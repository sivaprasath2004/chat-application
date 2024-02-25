import React,{useState} from 'react'
import { Link} from 'react-router-dom'
const Login = () => {
    const [checker,setChecker]=useState({})
  return (
   <div id='home_page'  style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
    <div style={{display:'flex',flexWrap:'wrap-reverse',justifyContent:'center',alignItems:'center'}}>
    <form style={{flex:'1 0 8rem',display:'flex',flexDirection:'column'}}>
    <h1>Login Room</h1>
        <input type='text' onChange={(e)=>setChecker(pre=>({...pre,name:e.target.value}))}/>
        <input type='text' onChange={(e)=>setChecker(pre=>({...pre,password:e.target.value}))}/>  
        <Link  onClick={(e)=>(!checker.name || !checker.password)?e.preventDefault():null}
        to={`/chat?name=${checker.name}&room=${checker.password}`}>
        <input type='submit' value={`submit`} /></Link>
    </form>
    <img  src='https://th.bing.com/th/id/OIG4.prqOvMVwWY0myCDIW1iF?w=1024&h=1024&rs=1&pid=ImgDetMain' style={{flex:'1 0 8rem',objectFit:'contain',height:300,width:300}} alt='image'/>
    </div>
   </div>
  )
}

export default Login
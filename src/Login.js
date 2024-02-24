import React,{useState} from 'react'
import { Link} from 'react-router-dom'
const Login = () => {
    const [checker,setChecker]=useState({})
    async function handleClick(){
        await localStorage.setItem("name",checker.name)
        await localStorage.setItem("room",checker.password)

    }
  return (
   <div>
    <h1>Login</h1>
    <form>
        <input type='text' onChange={(e)=>setChecker(pre=>({...pre,name:e.target.value}))}/>
        <input type='text' onChange={(e)=>setChecker(pre=>({...pre,password:e.target.value}))}/>  
        <Link  onClick={(e)=>(!checker.name || !checker.password)?e.preventDefault():handleClick()}
        to={`/chat`}>
        <button >submit</button></Link>
    </form>
   </div>
  )
}

export default Login
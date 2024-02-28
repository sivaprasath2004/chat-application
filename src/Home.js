import React from 'react'
import Logo from './asset/logo.png'
const Home = () => {
  return (
    <>
    <div id='home_page'>
      <h1  id='head'>Private Chat Application</h1>
     <div  style={{display:'flex',flexWrap:'wrap-reverse'}}>
    <div id='circle'></div>
    <div style={{flex:'1 0 8rem',padding:10,display:'flex',flexDirection:'column',gap:6}} id='content'>
        <h1><span>Empowering</span> Connections, Where Every Word Sparks <span>Joy.</span></h1>
        <p>Crafting Connections, Where Every Exchange Evokes Delight. Streamlining Conversations, Making Every Interaction Effortless. Your Gateway to Seamless Communication, Where Joyful Connections Await.</p>
    <a id='getStarted' href='/login'>Get started</a>
    <h2 id='h2'>Get Endless Private Connectivity</h2>
    </div>
    <div style={{display:'flex',flexDirection:'row',flex:'1 0 8rem',padding:10,justifyContent:'center',alignItems:'center'}} id='image'>
    <img src={Logo} style={{width:'85%',height:'85%',objectFit:'contain'}} alt='logo' id='logos' />
    <div style={{display:'flex',flexDirection:'column',gap:20}}>
        <a href='https://github.com/sivaprasath2004'><img src='https://cdn-icons-png.flaticon.com/128/3291/3291695.png'  style={{height:40,width:40}} alt='github'/></a>
        <a href='https://in.linkedin.com/in/sivaprasath2004'><img  src='https://cdn-icons-png.flaticon.com/128/3536/3536569.png' style={{height:40,width:40}} alt='linkdin'/></a>
    </div>
    </div>
    </div> 
    <h3 style={{fontSize:16,position:'absolute',bottom:'-1%'}}>@copyright<a href='https://github.com/sivaprasath2004'> sivaprasath2004</a></h3>
    </div>
    </>
  )
}

export default Home
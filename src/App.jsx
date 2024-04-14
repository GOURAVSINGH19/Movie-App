import React, { useEffect, useState } from 'react'
import Link from './Routers/Router'
import {auth} from './utilis/firebase'

function App() {
  const [login, setlogin] = useState(true);
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setlogin(false)
      }else{
        setlogin(true)
      }
    })
  })
  return (
    <div className='bg-zinc-800  w-screen h-screen flex'>
      <Link/>
    </div>
  )
}

export default App
"use client"

import {useState} from 'react'
import { logOut,logIn,toggleModerator } from '@/redux/features/auth-slice'
import {useDispatch} from 'react-redux'
import {AppDispatch, useAppSelector} from '@/redux/store'

export default function LogIn() {

  const dispatch = useDispatch<AppDispatch>();
  const [username,setUsername] = useState("");
  const isAuth = useAppSelector((state)=>state.authReducer.value.isAuth)
  const onClickLogIn = () => {
    dispatch(logIn(username));
  }
  const onClickLogOut = () => {
    dispatch(logOut());
  }
  const onClickToggle = ()=>{
    dispatch(toggleModerator())
  }
  return (
    <>
    <div>LogIn Page</div>
    <input className='text-black' onChange={(e)=>setUsername(e.target.value)} type="text" name="username" id="username" />
    <button onClick={onClickLogIn}>LogIn</button>
    {
      isAuth && <>
      <button onClick={onClickToggle}>Toggle Moderator</button>
      <button onClick={onClickLogOut}>LogOut</button>
      </>
    }
    
    </>
  )
}

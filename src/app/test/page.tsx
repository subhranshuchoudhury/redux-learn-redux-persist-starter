"use client"

import { useAppSelector } from "@/redux/store"

export default function Test(){
    const data = useAppSelector((state)=>state.authReducer.value)
    return <h1>Redux State : {JSON.stringify(data)}</h1>
}
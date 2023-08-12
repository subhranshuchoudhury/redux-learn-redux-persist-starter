"use client"

import { useAppSelector } from "@/redux/store"
import LogIn from "./components/logIn"
import { useRouter } from "next/navigation"

export default function Home() {
  const username = useAppSelector((state)=>state.authReducer.value.username)
  const isModerator = useAppSelector((state)=>state.authReducer.value.isModerator)
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Hello Redux</h1>
        <h2>Logged Username: {username} Type: {isModerator ? "👑" : "🙇‍♂️"}</h2>
        <LogIn/>
        <h2 onClick={()=>router.push("/test")}>Lets goto test page:</h2>
    </main>
  )
}

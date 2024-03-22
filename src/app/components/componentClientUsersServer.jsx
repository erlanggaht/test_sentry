'use client'

import { useRouter } from "next/navigation"
import { getUsers } from "../api/get-users/getUsers"

function ComponentClientUsersServer({ data }) {
  // // users
  // return data.map((user) => {
  //   return <p>{user.name}</p>
  // })


  // testing build
  //  return <p>{data.testing}</p>

  // testing json
  
  const router = useRouter()
  const addData = async() => {
    await getUsers.jsonExampleAdd({testing: `test ${Math.floor(Math.random() * 100 )}`})
    router.refresh()
  }

  const deleteData = async(id) => {
    await getUsers.jsonExampleDelete(id)
    router.refresh()
  }
  
  return (
    <>
    <button className="bg-sky-500 p-3 rounded text-white m-4" onClick={() => addData()}>POST: Add Data</button>
    {
    data?.map((user,index) => {
      return <p key={index} onClick={() => deleteData(user.id) } className="cursor-pointer">{user.testing}</p>
    })
    }
    </>
  )

}

export default ComponentClientUsersServer

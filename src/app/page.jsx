'use client'
import { useState } from "react";
import { getUsers } from "./api/get-users/getUsers";
import { CustomErrorAPI } from "./api/custom-error/customError.api";
import NextError from "next/error";
export default function Home() {
  const [users, setUsers] = useState([])
  const getUsersClient = async () => {
    const response = await getUsers.getAll()
    setUsers(response)
  }

  const [errorCode, setErrorCode] = useState()
  const fetchCustomError404 = async () => {
    try {
       await CustomErrorAPI[404]()
    } catch (error) {
      setErrorCode(error.message)
      throw new Error(error.message)
    }
  }

  const fetchCustomError500 = async () => {
    try {
       await CustomErrorAPI[500]()
    } catch (error) {
      setErrorCode(error.message)
      throw new Error(error.message)
    }
  }
  return (
    <main className="p-2">

      <div className="mt-6">
        <h1 className="text-2xl font-bold mb-6">Client</h1>
        <button className="bg-sky-500 p-4 px-6 text-white rounded mx-1" onClick={() => getUsersClient()}>Get User Client</button>
        <button className="bg-sky-500 p-4 px-6 text-white rounded mx-1" onClick={() => fetchCustomError404()}>Error 404</button>
        <button className="bg-sky-500 p-4 px-6 text-white rounded mx-1" onClick={() => fetchCustomError500()}>Error 500</button>
        {users.length > 0 && users.map((user) => {
          return <p>{user.name}</p>
        })}
      </div>
      
      {errorCode ?  
      <div className="flex justify-center border h-96 items-center mt-2"><NextError statusCode={errorCode} /> </div> :
       <div className="flex justify-center border h-96 items-center mt-2">the result of a fetch error on the client</div>}
    </main>
  );
}

import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([])
  
useEffect(()=>
{
  axios.get('/api/users')
  .then((res)=>
  {
    setUsers(res.data)
  })
},[])

  return (
    <>
    <h1>Users</h1>
    <ul>{users.map((elem,indx)=>
    {
      return <li>{elem.name}</li>
    })}</ul>
    </>
  )
}

export default App
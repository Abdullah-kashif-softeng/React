import React, { useEffect,useState } from 'react'
import axios from 'axios';

function App() {
  const [user,setuser]=useState([])

  const getusers=()=>{
    axios.get("/hello")
      .then(response => {
        setuser(response.data);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }
  useEffect(()=>{
  getusers()
  },[])
  return (
    <div>
      hello
      {user.map((prod, i) => (
  <h1 key={i}>data is: {prod.name}</h1>
))}

    </div>
  )
}

export default App
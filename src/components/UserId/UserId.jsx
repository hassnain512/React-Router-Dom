import React from 'react'
import { useParams } from 'react-router-dom'; 
function UserId() {
  const { id } = useParams();
  return (
    <div>
      <h1>UserId:{id}</h1>
    </div>
  )
}

export default UserId

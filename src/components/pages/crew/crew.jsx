import React from 'react'
import {  useParams } from "react-router-dom";

const Crew = () => {
  const { id } = useParams();
  return (
    <div>Crew {id}</div>
  )
}

export default Crew
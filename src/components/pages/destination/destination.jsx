import React from 'react'
import {  useParams } from "react-router-dom";

const Destination = () => {
  const { id } = useParams();
  return (
    <div>Destination {id}</div>
  )
}

export default Destination
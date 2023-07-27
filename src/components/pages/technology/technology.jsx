import React from 'react'
import {  useParams } from "react-router-dom";

const Technology = () => {
  const { id } = useParams();
  return (
    <div>Nuevo {id}</div>

  )
}

export default Technology
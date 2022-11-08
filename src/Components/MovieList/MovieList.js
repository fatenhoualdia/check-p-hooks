import React from 'react'
import Movie from '../MovieCard/MovieCard'

const MovieList = ({data}) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly",flexWrap:"wrap",background:"linon" }}>
      {data.map((el,i)=><Movie key={i} el={el} />)}


    </div>
  )
}

export default MovieList

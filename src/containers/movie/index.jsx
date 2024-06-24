import { FeaturedMovie } from '../../components/Featured-movie/index'
import React from 'react'

const MovieContainer = ({movie}) => {
  return (
    <FeaturedMovie movie={movie} isCompact={false}/>
  )
}

export default MovieContainer
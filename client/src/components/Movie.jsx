import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from 'axios';
import { InView } from "react-intersection-observer";

const Movie = (props) => {
  const { id, heading, category } = props;
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])

  const getData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_SERVER_ENDPOINT}/get?category=${category}&page=${page}`)
    setMovies(prev =>[...prev,...data.data.docs])
  }
  
  const getMoreData = (imageId) => {
    const mod = imageId % 10;
    if ([7, 8, 9].includes(mod)) {
      setPage(prev => prev + 1)
      getData();
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <section className='section'>
        <h2>{heading}</h2>
        <div className='flex hero-slider'>
        <button className='btn'>click</button>
          {movies.map((movie, idx) =>
            <div className={`img-container-${id}`} key={idx}>
              
              <InView onChange={() => getMoreData(idx)} >
                <LazyLoadImage src={movie.imageUrl} className={`hero-img-${id}`} effect="blur" />
              </InView>
            </div>)}
        </div>
      </section>
    </div>
  )
}

export default Movie
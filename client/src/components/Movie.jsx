import React, { useEffect, useState, useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from 'axios';
import { InView } from "react-intersection-observer";

const Movie = (props) => {
  const { id, heading, category } = props;
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);
  const listInnerRef = useRef();

  // Calling the Api with the help of axios
  const getData = async (page) => {
    const { data } = await axios.get(`${import.meta.env.VITE_SERVER_ENDPOINT}/get?category=${category}&page=${page}`)
    setMovies(prev => [...prev, ...data.data.docs])
    setTotal(data.data.total);
  }

  const getMoreData = (imageId) => {
    const mod = imageId % 10;
    if ([7, 8, 9].includes(mod)) {
      setPage(prev => prev + 1)
      getData();
    }
  }

  // Logic for  showing 10 image Per page
  const onScroll = (event) => {
    const { clientWidth, scrollLeft, scrollWidth } = event.target;
    if(Math.ceil(clientWidth + scrollLeft) >= scrollWidth && page < total/10){
     getData(page+1);
     setPage(page+1);
    }
  };

  useEffect(() => {
    getData(page);
  }, [])

  return (
    <div>
      <section className='section'>
        <h2>{heading}</h2>
        <div className='flex hero-slider' onScroll={onScroll} ref={listInnerRef}>
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

export default Movie;
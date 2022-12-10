import Movie from './components/Movie';
const App = () => {
  return (
    <>
      <Movie id={0} category={'trending'} heading={'Trending Trailer'} />
      <Movie id={1} category={'heartWarming'} heading={'Heart Warming'} />
      <Movie id={2} category={'language'} heading={'Watch in your Language'} />
      <Movie id={3} category={'actionMovies'} heading={'Action Movies'} />
      <Movie id={4} category={'dramaMovies'} heading={'Drama Movies'} />
      <Movie id={5} category={'thrillerMovies'} heading={'Thrillor Movies'} />
      <Movie id={6} category={'comedyShows'} heading={'Comedy Shows'} />
      <Movie id={7} category={'webSeries'} heading={'Web Series'} />
      <Movie id={8} category={'mysteryShows'} heading={'Mystery Shows'} />
      <Movie id={9} category={'adventureMovies'} heading={'Adventure Movies'} />
      <Movie id={10} category={'hororMovies'} heading={'Horror Movies'} />
    </>
  );

}

export default App;
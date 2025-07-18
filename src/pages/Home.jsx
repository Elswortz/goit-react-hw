import TrendingMovies from '../components/TrendingMovies/TrendingMovies';

function Home() {
  // async function fetchMovies() {
  //   const data = await API.getMovieCredits(1087192);
  //   console.log(data);
  // }
  // fetchMovies();

  return (
    <>
      <TrendingMovies />
    </>
  );
}

export default Home;

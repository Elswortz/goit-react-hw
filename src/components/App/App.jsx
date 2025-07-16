import { Routes, Route } from 'react-router';

import Layout from '../../layouts/Layout';
import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import MovieDetails from '../../pages/MovieDetails';
import Cast from '../../pages/Cast';
import Reviews from '../../pages/Reviews';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

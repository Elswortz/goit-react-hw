import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import * as API from '../../services/movies-api';

function CastList() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCastList(movieId);
  }, [movieId]);

  const fetchCastList = async movieId => {
    try {
      setIsLoading(true);
      const data = await API.getMovieCredits(movieId);
      setCast(data.cast);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ul>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CastList;

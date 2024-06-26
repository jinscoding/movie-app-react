import { useEffect, useState } from "react";
import { Movie } from "../components/Movie";
import { MovieProps } from "../models/movie.model";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loader}>
            <span>Loading...</span>
          </div>
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                rating={movie.rating}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailProps } from "../models/movie.model";
import LoadingScreen from "../components/LoadingScreen";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
`;

const Poster = styled.img`
  margin-right: 20px;
  width: 300px;
  height: auto;
`;

const MovieInfo = styled.div`
  max-width: 600px;
  text-align: left;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`;

const Year = styled.span`
  font-size: 1.5rem;
  color: grey;
  margin-left: 10px;
`;

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<DetailProps>({
    id: NaN,
    medium_cover_image: "",
    title: "",
    rating: NaN,
    year: NaN,
    description_intro: "",
    genres: [],
  });

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Wrapper>
          <Poster src={movie.medium_cover_image} alt={movie.title} />
          <MovieInfo>
            <TitleWrapper>
              <Title>{movie.title}</Title>
              <Year>({movie.year})</Year>
            </TitleWrapper>
            <div>
              <p>{movie.genres.join(", ")}</p>
              <p>Rating: {movie.rating}</p>
              <p>Summary: {movie.description_intro}</p>
            </div>
          </MovieInfo>
        </Wrapper>
      )}
    </>
  );
}

export default Detail;

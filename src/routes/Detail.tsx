import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailProps } from "../models/movie.model";
import LoadingScreen from "../components/LoadingScreen";
import styled from "styled-components";

const Wrapper = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
`;

const Background = styled.div`
  position: absolute;
  top: 10;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* 어두운 배경색 설정 */
  filter: blur(5px); /* 배경 이미지에 흐림 효과 */
`;

const Poster = styled.img`
  margin-right: 20px;
  width: 300px;
  height: auto;
  z-index: 1; /* 포스터 이미지를 앞으로 가져옴 */
`;

const MovieInfo = styled.div`
  max-width: 600px;
  text-align: left;
  z-index: 1; /* 영화 정보를 앞으로 가져옴 */
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
  }, [id]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Wrapper backgroundImage={movie.medium_cover_image}>
          <Background />
          <Poster src={movie.medium_cover_image} alt={movie.title} />
          <MovieInfo>
            <TitleWrapper>
              <Title>{movie.title}</Title>
              <Year>({movie.year})</Year>
            </TitleWrapper>
            <div>
              <p>{movie.genres.join(", ")}</p>
              <p>Rating: {movie.rating}</p>
              <p>{movie.description_intro}</p>
            </div>
          </MovieInfo>
        </Wrapper>
      )}
    </>
  );
}

export default Detail;

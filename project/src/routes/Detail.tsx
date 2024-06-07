import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailProps } from "../types";


function Detail() {
    const { id } = useParams();
    //const {game, setGame} = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);
    const [movie, setMovie] = useState<DetailProps>({
        medium_cover_image: "",
        title: "",
        summary: "",
        genres: [],
    });
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false)
    };

    useEffect(() => {
        getMovie();
    }, []);
 
    return (
        <>
            {loading ? <h1>is Loading...</h1>:
            <div>
                <h1>{movie.title}</h1>
                <img src = {movie.medium_cover_image} alt={movie.title} />
            </div>
         }
        </>
    )
}

export default Detail;
// 2024 - 06 -05
import React, { useEffect, useState } from "react";
import { Movie } from "../components/Movie";


interface Props {
    id: number;
    medium_cover_image: string;
    title: string;
    summary: string;
    genres: string[];
}

function Home() {
    const [loading, setLoading] = useState<boolean>(true);
    const [movies, setMovies] = useState<Props[]>([]);
    const getMovies = async () => {
        const json = await (
        await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year'
        )
        ).json();
        setMovies(json.data.movies)
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <>
            <h1>Movie({movies.length})</h1>
            <div>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div>
                        {movies.map((movie) => (
                            <Movie
                                key ={movie.id}
                                id={movie.id}
                                coverImg = {movie.medium_cover_image} 
                                title = {movie.title} 
                                summary={movie.summary} 
                                genres ={movie.genres} 
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Home;
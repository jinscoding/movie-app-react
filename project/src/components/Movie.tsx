// 2024 - 06 -05
import React from "react";
import { Link } from "react-router-dom";

interface Props {
    id: number;
    coverImg: string;
    title: string;
    summary: string;
    genres: string[];
}

export function Movie({id, coverImg, title, summary, genres} : Props){
    return (
        <>
            <div>
                <img src={coverImg}  alt={title}/>
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <p>{summary}</p>
                <p>genres</p>
                <ul>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

// key 속성은 React의 내부 동작에 사용되는 특별한 속성이다.
// 컴포넌트 내부에서 props로 전달되는 것이 아니라 React에 의해 관리되는 속성이다.
// 따라서 Movie 컴포넌트에서 key 값을 props로 받거나 사용하지 않습니다. 
// 대신 App 컴포넌트에서 Movie 컴포넌트를 렌더링할 때 key 속성을 직접 설정하여 React에게 각 항목을 고유하게 식별하도록 전달합니다. 이렇게 하면 React가 올바르게 리스트를 관리하고 업데이트할 수 있습니다.
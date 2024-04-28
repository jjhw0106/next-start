import { Metadata } from "next";
import { Head } from "next/document";
import Link from "next/link";
import { resolve } from "path";
import { title } from "process";
import { useEffect, useState } from "react";

const metadata = {
  title: "Home"
}

export const API_URL: string = "https://nomad-movies.nomadcoders.workers.dev/movies";

// 백엔드에서 데이터 패칭을 마친 후, 클라이언트에서 표시하는 방식
// 로딩이 클라이언트에서 백엔드로 넘어감.
// 이 경우, 최초의 패치 시에는 로딩이 있지만, 두 번째 부터는 메모리에 캐시된 데이터를 보여준다.
// 문제점, 로딩시 유저가 페이지에서 아무것도 보지 못한다.
async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const response = await fetch(API_URL);
  const json = response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      { movies.map(movie => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>) }
    </div>
  )
}


// 기존 리액트에서 data fetch하는 방법
// 클라이언트 페이지에서는 metadata를 사용하지 못함
// export default function Page() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
  // const getMovies = async () => {
  //   const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
  //   // const response = await fetch('http://localhost:8081/calendars/centers');
  //   const json = await response.json();
  //   setMovies(json);
  //   setIsLoading(false);
  // }
//   useEffect(()=>{
//     getMovies();
//   }, []);

//   return <div>
//       <h1>Hello Next!</h1>
//       <p >{isLoading?"Loading...": JSON.stringify(movies)}</p>
//   </div>
// }
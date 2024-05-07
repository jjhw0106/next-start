import Movie from "../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";
import Pagination from "../features/pagination";
import PageList from "../components/page-list";
import React from "react";

export const metadata = {
  title: "Home",
  default: "Loading..."
}


// 백엔드에서 데이터 패칭을 마친 후, 클라이언트에서 표시하는 방식
// 로딩이 클라이언트에서 백엔드로 넘어감.
// 이 경우, 최초의 패치 시에는 로딩이 있지만, 두 번째 부터는 메모리에 캐시된 데이터를 보여준다.
// 문제점, 로딩시 유저가 페이지에서 아무것도 보지 못한다.
async function getMovies() {
  const response = await fetch(API_URL);
  const json = response.json();
  return json;
}


type Movie = {
  id: string;
  poster_path: string;
  title: string;
}
// export function getMoviesToShow({perPage, currentPage, items}: PaginationProps): Movie[] {
//   const startIdx = currentPage * perPage;
//   const endIdx = startIdx + perPage;
//   return items.slice(startIdx, endIdx);
// }

export default async function HomePage() {
  const movies = await getMovies();
  const perPage = 4;
  const currentPage = 1;
  // const movieList = getMoviesToShow({perPage, currentPage, items: movies});

  return (
    <div>
      <PageList items={movies}>
        {/* <Pagination items={movies} perPage={perPage} currentPage={currentPage} onClick={undefined}></Pagination> */}
      </PageList>
    </div>
  )
}
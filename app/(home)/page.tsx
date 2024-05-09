import Movie from "../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";
import Pagination from "../components/pagination";
import PageList from "../components/page-list";
import React from "react";
import MovieList from "../components/movie-list";

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

export default async function HomePage() {
  const movies = await getMovies();
  
  return (
    <div>
      {/* 
      todo: 
      page에서 pageList로 movies와 perPage정보를 전달 
      pageList에서는 movies와 perPage 정보를 가지고 페이지네이션에 필요한 showItems, startIdx 등을 가공
      pageList에서는 <T>CustomComponentList, 즉 MovieList, MusicList등을 page로부터
              전달 받아 페이지네이션을 붙여서 리스트 화면을 그려준다
      문제는, page.tsx에서 MovieList인지 MusicList인지를 선택하여 props로 넘겨주어야 하는데, 그 방법을 모르겠다
      */}
      <PageList items={movies} perPage={3}>
        {/* {function customFunction(showItems, perPage) {return <MovieList perPage={perPage} items={showItems} />}} */}
        {/* <MovieList /> */}
        {/* {(props) => (<MovieList perPage={props.perPage} items={props.items} />)} */}
      </PageList>
    </div>
  )
}
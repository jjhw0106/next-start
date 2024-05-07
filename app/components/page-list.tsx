"use client";

import Movie from "./movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";
import Pagination from "../features/pagination";
import { Children, useState } from "react";

type Movie = {
  id: string;
  poster_path: string;
  title: string;
}

interface MovieListProps {
  movies: Movie[]
}

export default function PageList({movies}: MovieListProps) {
  const perPage = 4;
  const currentPage = 1;
  const [items, setItems] = useState(movies);
  
  function onClick() {
    console.log(movies);
    // const pagedItems = items.splice(1,4);
    setItems(items.splice(1,4));
    
    return console.log("movies: ", movies);
  }

  return <div>
    <div className={styles.container}>
    { 
      items.map((movie) => <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>) 
    }
    </div>
    <Pagination items={movies} perPage={perPage} currentPage={currentPage} onClick={onClick}></Pagination>
  </div>
}
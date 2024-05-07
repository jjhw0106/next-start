"use client";

import Movie from "./movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";
import Pagination from "../features/pagination";
import React, { Children, useState } from "react";

type Movie = {
  id: string;
  poster_path: string;
  title: string;
}

interface ListProps<T> {
  items: T[],
  children?: React.ReactNode;
}

export default function PageList({items: movies, children}: ListProps<Movie>) {
  const perPage = 4;
  const currentPage = 1;
  const [items, setItems] = useState(movies);
  
  function onClick() {
    const showItems = items.slice(0,4);
    setItems(showItems);
    
    return console.log("movies: ", movies);
  }

  return <div>
    <div className={styles.container}>
    { 
      items.map((movie) => <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>) 
    }
    </div>
    {/* {children} */}
    <Pagination items={movies} perPage={perPage} currentPage={currentPage} onClick={onClick}></Pagination>
  </div>
}
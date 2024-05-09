"use client";

import Movie from "./movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";
import Pagination from "./pagination";
import React, { Children, ReactNode, useState } from "react";
import MovieList from "./movie-list";

interface ListProps<T> {
  perPage: number
  items: T[],
  // children?: React.ReactNode;
  children?: (showItems: T[], perPage: number) => React.ReactNode;
}

export default function PageList({perPage, items, children}: ListProps<any>) {
  const [currentPage, setCurrentPage] = useState(1);
  const startIdx = (currentPage-1) * perPage;
  const showItems = items.slice(startIdx, startIdx + perPage);
  
  function onClick(clickedPage: React.SetStateAction<number>) {
    setCurrentPage(clickedPage);
  }

  return (

  (<div>
    <div>
      <MovieList perPage={perPage} items={showItems}></MovieList>
      {/* {React.Children.map(children, child=>React.cloneElement(child as React.ReactElement<any>, {items: showItems}))} */}
      {/* {showItems.map((movie) => <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>)} */}
      {/* {children && children(showItems, perPage)} */}
    </div>
    <Pagination items={items} perPage={perPage} currentPage={currentPage} onClick={onClick}></Pagination>
  </div>)
  )
}
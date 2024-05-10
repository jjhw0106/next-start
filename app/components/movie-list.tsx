"use client";

import { useState } from 'react';
import styles from '../../styles/home.module.css';
import Movie from './movie';
import PageList from './pagination';
interface Movie {
  id: string
  title: string
  poster_path: string
}

interface MovieListProps/* <T> */ {
  perPage: number
  items: Movie[],
}

export default function MovieList({ perPage, items }: MovieListProps) {
  const movies = items;
  const [showItems, setShowItems] = useState(movies.slice(0,perPage));

  return(
    <PageList items={items} perPage={perPage} setShowItems={setShowItems}>
      <div>
        <div className={styles.container}>
        { 
          showItems.map((movie) => <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>) 
        }
        </div>
      </div>
    </PageList>  
  )
}
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  }
  useEffect(()=>{
    getMovies();
  }, []);

  return <div>
      <h1>Hello Next!</h1>
      <p >{isLoading?"Loading...": JSON.stringify(movies)}</p>
  </div>
}
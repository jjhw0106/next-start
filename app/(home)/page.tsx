import { API_URL } from "../constants";
import React from "react";
import MovieList from "../components/movie-list";

export const metadata = {
  title: "Home",
  default: "Loading..."
}

async function getMovies() {
  const response = await fetch(API_URL);
  const json = response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  
  return (
    <div>
      <MovieList items={movies} perPage={5}></MovieList>
    </div>
  )
}
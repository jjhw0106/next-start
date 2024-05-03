import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";
import Loading from "./loading";

export default async function MovieDetail({params: {id}}: {params: {id:string}}) {
  return (<div>
    <Suspense fallback={<Loading text="Movie Info" />}>
      <MovieInfo id={id}></MovieInfo>
    </Suspense>
    <Suspense fallback={<Loading text="Movie Videos"/>}>
      <MovieVideos id={id}></MovieVideos>
    </Suspense>
  </div>)
}
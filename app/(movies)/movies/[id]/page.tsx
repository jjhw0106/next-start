import { Suspense } from "react";
import MovieInfo, { getMovieInfo } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";
import Loading from "./loading";

interface IParams {
  params: {id: string}
}

// export async function generateMetadata({params: {id}}: IParams) {
//   const movie = await getMovieInfo(id);
//   return {
//     title:movie.title
//   }
// }

export default async function MovieDetail({params: {id}}: {params: {id:string}}) {
  return (<div>
    <Suspense fallback={<Loading text="Movie Info"></Loading>}>
      <MovieInfo id={id}></MovieInfo>
    </Suspense>
    <Suspense fallback={<Loading text="Movie Videos"/>}>
      <MovieVideos id={id}></MovieVideos>
    </Suspense>
  </div>)
}
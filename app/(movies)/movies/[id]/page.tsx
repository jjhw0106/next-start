import { Suspense } from "react";
import MovieInfo, { getMovieInfo } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";
import Loading from "./loading";
import { metadata } from "../../../layout";


// api를 통해 페이지의 제목을 받아와야 하기 때문에,
// metadata를 바로 사용하지 못한다.
// generateMetadata라는 함수를 만들어서 활용하자
interface IParams {
  params: {id: string}
}

// export async function generateMetaData({params: {id}}:IParams) {
//   const movie = await getMovieInfo(id);

//   return {
//     title: "ASDfasdf",
//   };
// }
export async function generateMetaData() {

  return {
    title: "ASDfasdf",
  };
}

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
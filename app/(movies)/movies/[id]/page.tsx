import { Suspense } from "react";
import MovieInfo, { getMovieInfo } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";
import Loading from "./loading";

// api를 통해 페이지의 제목을 받아와야 하기 때문에,
// metadata를 바로 사용하지 못한다.
// generateMetadata라는 함수를 만들어서 활용하자
interface IParams {
  params: {id: string}
}

// 함수명은 반드시 generateMetadata여야 한다.
export async function generateMetadata({params: {id}}:IParams) {
  // 데이터 패칭을 여기서 한번, movieInfo에서 한번 해서 두 번 한다고 생각할 수 있지만,
  // 한 번 패칭된 데이터는 캐싱되기 때문에 비효율적이라 생각하지 않아도 된다.
  const movie = await getMovieInfo(id); 


  return {
    title: movie.title,
  };
}
// export const metadata = {
//   title: "Home",
//   default: "Loading..."
// }

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
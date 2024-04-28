import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise(resolve=>setTimeout(resolve,2000))
  const response = await fetch(`${API_URL}/${id}`);
  return response.json()
}  

async function getVideo(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise(resolve=>setTimeout(resolve,2000))
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json()
}

export default async function MovieDetail({params: {id}}) {
  // 직렬로 실행
  const movie = await getMovie(id);
  const video = await getVideo(id);

  // 병렬로 실행
  const [movies, videos] = await Promise.all([getMovie(id), getVideo(id)])
  return <div>
      <h1>Movie {movie.title}</h1>
  </div>
}
// export default function MovieDetail(props) {
//   console.log(props.params.id);
//   console.log(props.searchParams.version)
//   return <div>
//     <h1>Movie {props.id}</h1>
//   </div>
// }
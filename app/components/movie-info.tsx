import { API_URL } from "../(home)/page";

export async function getMovieInfo(id: string) {
  console.log("getMovieInfo!!!!!!!!!!!!!!!");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`)
  return response.json();
}
// async function getMovieInfo(id: string) {
//   console.log("getMovieInfo!!!!!!!!!!!!!!!");
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   return [1,2,3,4]
// }

export default async function MovieInfo({id}: {id: string}) {
  const movieInfo = await getMovieInfo(id);
  return <h6>{JSON.stringify(movieInfo)}</h6>
}
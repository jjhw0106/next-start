import { API_URL } from "../(home)/page";
import styles from "../../styles/movie-info.module.css";

async function getMovieInfo(id: string) {
  console.log("getMovieInfo!!!!!!!!!!!!!!!");
  await new Promise((resolve) => setTimeout(resolve, 2000));
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
  return <div className={styles.container}>
    <img src={movieInfo.poster_path} className={styles.poster}/>
    <div className={styles.info}>
      <h1 className={styles.title}>{movieInfo.title}</h1>
      <h3>💛{movieInfo.vote_average.toFixed(1)}</h3>
      <p>{movieInfo.overview}</p>
      <a href={movieInfo.homepage} target="_blank">Homepage &rarr;</a>
    </div>
  </div>
}
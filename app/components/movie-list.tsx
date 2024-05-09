import styles from '../../styles/home.module.css';
import Movie from './movie';
import PageList from './page-list';
interface Movie {
  id: string
  title: string
  poster_path: string
}

interface ListProps/* <T> */ {
  perPage: number
  items: Movie[],
  children?: React.ReactNode;
}

export default function MovieList({ perPage, items, children }: ListProps) {
  const movies = items;
  return(
  <div>
    <div className={styles.container}>
    { 
      movies.map((movie) => <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>) 
    }
    </div>
    {children}
    </div>
  )
}
import { URL } from "../app/(home)/page";
import styles from "../style/movie-info.module.css";

export async function getMovie(id) {
  console.log(`Fetching Movie : ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}) {
  const movie = await getMovie(id);
  // return <h6>{JSON.stringify(movie)}</h6>
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} />
      <div className={styles.info}>
        <h1 className={styles.title} >{movie.title}</h1>
        <h3> ★ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">Homepage &rarr;</a>
      </div>
    </div>
  )
}
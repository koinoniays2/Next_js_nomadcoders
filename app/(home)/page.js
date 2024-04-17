import Movie from "../../components/movie";
import styles from "../../style/home.module.css";

export const metadata = {
  title: 'HOME',
}

export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
  // useState, useEffect를 사용하지 않고 백엔드에서 fetch
  // await new Promise((resolve) => setTimeout(resolve, 5000)); // 임의로 서버 딜레이 시키기
  /* 백엔드에서 fetch 되고있기 때문에 데이터가 도착하기 전에는 화면이 렌더링 되지 않음
  -> root에 loading파일 생성(page파일 옆에 있어야함 => 각각의 페이지에 로딩화면 구현 가능) */
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>
      ))}
    </div>
  )
}
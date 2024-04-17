import { Suspense } from "react";
import MovieVideos from "../../../../components/moive-videos";
import MovieInfo, { getMovie } from "../../../../components/movie-info";

// async function getMovie(id) {
//   console.log(`Fetching Movie : ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${URL}/${id}`);
//   return response.json();
// }

// async function getVideos(id) {
//   console.log(`Fetching Video : ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${URL}/${id}/videos`);
//   return response.json();
// }

// 동적인 메타데이타
export async function generateMetadata(props) {
  const {params: {id}} = props; // 컴포넌트 뿐만 아니라 generateMetadata함수에도 전달된다
  const movie = await getMovie(id)
  return {
    title: movie.title
  }
}

export default async function Movies(props) {
  const {params: {id}} = props;
  // console.log("start fetching");
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); // 병렬적으로 fetch하기 -> loading.js 페이지를 씀
  // console.log("end fetching");
  return (
    <>
    {/* 자신에 관한 데이터만 fetch하는 컴포넌트 생성 후 Suspense로 감싸기 -> Suspense가 데이터를 fetch하기 위해 컴포넌트를 await하는 것 
      컴포넌트를 async로 해야함 */}
    {/* Suspense의 fallback -> 컴포넌트가 await되는 동안 표시할 메세지를 render -> loading.js 페이지가 아닌 분리된 각자의 로딩 가능 */}
    {/* => 병렬적으로 2가지 fetch를 할 수 있고 하나가 완료되면 다른 컴포넌트를 기다릴 필요 없다. */}
    <Suspense fallback={<h1>Loading movie info</h1>}>
      <MovieInfo id={id}/>
    </Suspense>
    <Suspense fallback={<h1>Loading video info</h1>}>
      <MovieVideos id={id}/>
    </Suspense>
    </>
  )
}
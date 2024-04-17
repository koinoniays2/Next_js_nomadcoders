import { URL } from "../app/(home)/page";
import styles from "../style/movie-videos.module.css";

// videos만을 렌더링하는 컴포넌트
async function getVideos(id) {
  console.log(`Fetching Video : ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error("something broke...");
  const response = await fetch(`${URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}

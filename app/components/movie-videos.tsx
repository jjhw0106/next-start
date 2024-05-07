import styles from "../../styles/movie-videos.module.css";
import { API_URL } from "../constants";

async function getVideo(id: string) {
  console.log("getVideo!!!!!!!!!!!!!!!!!");
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos?`);
  return response.json()
}

export default async function MovieVideos({id}: {id: string}) {
  const videos = await getVideo(id);
  const videoUrl = 'https://www.youtube.com/embed'
  return <div className={styles.container}>
    {videos.map((video)=>
      <iframe 
        key={video.id}
        src={`${videoUrl}/${video.key}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={video.name}
        className={styles.iframe}
      >
      </iframe>)}
  </div>
}
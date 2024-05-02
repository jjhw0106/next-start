import { API_URL } from "../(home)/page";

async function getVideo(id: string) {
  console.log("getVideo!!!!!!!!!!!!!!!!!");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json()
}

export default async function MovieVideos({id}: {id: string}) {
  const videos = await getVideo(id);
  const videoUrl = 'https://www.youtube.com/embed/';
  return (
    <div>
      <h6>{JSON.stringify(videos)}</h6>
      {
        videos.map((video)=><iframe 
          key={video.id}
          src={`${videoUrl}${video.key}`}
        >
        </iframe>)
      }
      {/* <iframe src={`${videoUrl}${3N84gAPPKXE}`}></iframe> */}
    </div>
  )
  
}
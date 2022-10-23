import axios from "axios";

async function getVideoData(apiKey, videoIdList){
  const key = "&key=" + apiKey;
  const part = "part=contentDetails,liveStreamingDetails,snippet,statistics,topicDetails"
  const url = "https://www.googleapis.com/youtube/v3/videos?" + part + key;

  let videoDataList = [];
  let count = 0;
  for(let videoIdIndex in videoIdList){
    if (count == 10) return;
    const videoId = "&id=" + videoIdList[videoIdList];
    await axios.get(url + videoId)
    .then((reponse) =>{
      console.log(reponse.data.items[0]);
    });
    count++;
  }
}

export default getVideoData;
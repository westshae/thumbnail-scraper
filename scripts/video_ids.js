import axios from "axios";

async function getChannelVideoIds(apiKey, channelId){
  let youtubeNextPageToken = null;
  let youtubeTotalResults = null;
  const maxResults = 50;
  const part = "id";
  let responseCollection = null;

  const url = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&channelId=" + channelId + "&part=" + part + "&maxResults=" + maxResults;

  await axios.get(url)
  .then((response) =>{
    youtubeNextPageToken = response.data.nextPageToken;
    youtubeTotalResults = response.data.pageInfo.totalResults;
    responseCollection = [response.data];
  });

  if(youtubeNextPageToken != null && youtubeTotalResults != null){
    for(let i = 0; i < youtubeTotalResults; i += maxResults){
      if(youtubeNextPageToken == null) continue;
      await axios.get(url +  "&pageToken=" + youtubeNextPageToken)
        .then((response) =>{
          youtubeNextPageToken = response.data.nextPageToken;
          responseCollection.push(response.data);
        });
    }
  }

  let videoIdList = [];

  for(let responseIndex in responseCollection){
    for(let itemIndex in responseCollection[responseIndex].items){
      if(responseCollection[responseIndex].items[itemIndex].id.videoId){
        videoIdList.push(responseCollection[responseIndex].items[itemIndex].id.videoId);
      }
    }
  }

  return JSON.stringify(videoIdList);
}

export default getChannelVideoIds
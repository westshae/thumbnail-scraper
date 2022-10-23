import axios from "axios";
import "dotenv/config";
import * as fs from 'fs';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

let youtubeNextPageToken = null;
let youtubeTotalResults = null;
const maxResults = 50;
const part = "id";
let responseCollection = null;

await axios.get("https://www.googleapis.com/youtube/v3/search?key=" + YOUTUBE_API_KEY + "&channelId=" + YOUTUBE_CHANNEL_ID + "&part=" + part + "&maxResults=" + maxResults)
  .then((response) =>{
    youtubeNextPageToken = response.data.nextPageToken;
    youtubeTotalResults = response.data.pageInfo.totalResults;
    responseCollection = [response.data];
  });

// if(youtubeNextPageToken != null && youtubeTotalResults != null){
//   for(let i = 0; i < youtubeTotalResults; i += maxResults){
//     if(youtubeNextPageToken == null) continue;
//     await axios.get("https://www.googleapis.com/youtube/v3/search?key=" + YOUTUBE_API_KEY + "&channelId=" + YOUTUBE_CHANNEL_ID + "&part=" + part + "&maxResults=" + maxResults + "&pageToken=" + youtubeNextPageToken)
//       .then((response) =>{
//         youtubeNextPageToken = response.data.nextPageToken;
//         responseCollection.push(response.data);
//       });
//   }
// }

for(let responseIndex in responseCollection){
  for(let itemIndex in responseCollection[responseIndex].items){
    console.log(responseCollection[responseIndex].items[itemIndex].id.videoId)
  }
}

// fs.writeFileSync('raw_id_' + YOUTUBE_CHANNEL_ID + '.json', JSON.stringify(jsonToSave));
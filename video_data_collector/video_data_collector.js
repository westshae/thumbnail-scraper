import axios from "axios";
import "dotenv/config";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

let youtubeNextPageToken = null;
let youtubeTotalResults = null;
const maxResults = 50;
const part = "id";
let responseCollection = {};

axios.get("https://www.googleapis.com/youtube/v3/search?key=" + YOUTUBE_API_KEY + "&channelId=" + YOUTUBE_CHANNEL_ID + "&part=" + part + "&maxResults=" + maxResults)
  .then((response) =>{
    //console.log(response.data);
    youtubeNextPageToken = response.data.nextPageToken;
    youtubeTotalResults = response.data.pageInfo.totalResults;
    responseCollection.push(response.data);

    // for(var data in response.data.items){
    //   console.log(response.data.items[data].id.videoId);
    // }
  });

if(youtubeNextPageToken != null && youtubeTotalResults != null){

}

print(responseCollection.length);
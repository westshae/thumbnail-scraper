import "dotenv/config";
import getChannelVideoIds from "./scripts/video_ids.js";
import getVideoData from "./scripts/video_data.js";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

const videoIds = await getChannelVideoIds(YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID);
getVideoData(YOUTUBE_API_KEY, videoIds);
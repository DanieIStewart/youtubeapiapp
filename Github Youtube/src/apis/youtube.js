import axios from "axios";

// Enter your api key availble at https://developers.google.com/youtube/v3/getting-started
const KEY = "";

export default axios.create({
  baseURL: " https://www.googleapis.com/youtube/v3",
  params: {
    maxResults: 5,
    key: KEY,
  },
});

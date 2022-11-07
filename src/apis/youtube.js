import axios from 'axios';

const KEY = 'AIzaSyAvul_v1mqfoj526EMimynKcmj335wson4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
})
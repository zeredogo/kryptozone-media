import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '06b7742ab6msh0cca1d68ffcc3fcp19a4a1jsn3ccfa6bc8e06',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
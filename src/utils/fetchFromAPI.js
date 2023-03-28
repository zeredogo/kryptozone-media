import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '06b7742ab6msh0cca1d68ffcc3fcp19a4a1jsn3ccfa6bc8e06',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
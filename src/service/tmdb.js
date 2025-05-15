//  TMDB uchun axios instance
// services/tmdb.js
import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmVhZGZjOTcyNjBhNTE4Y2Q1NGEwNmY0MTA5ODUwNCIsIm5iZiI6MTczMjI2MzU5NS45ODMsInN1YiI6IjY3NDAzZWFiOGI0ZTRjMmVmNmY3ODE4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.avBfYa2pUXzhS5Uwskn-3n6w0_wLzR1_DkhkqPlglr0";
const BASE_URL = "https://api.themoviedb.org/3";

const tmdb = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmVhZGZjOTcyNjBhNTE4Y2Q1NGEwNmY0MTA5ODUwNCIsIm5iZiI6MTczMjI2MzU5NS45ODMsInN1YiI6IjY3NDAzZWFiOGI0ZTRjMmVmNmY3ODE4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.avBfYa2pUXzhS5Uwskn-3n6w0_wLzR1_DkhkqPlglr0",
  },
  params: {},
});

export default tmdb;

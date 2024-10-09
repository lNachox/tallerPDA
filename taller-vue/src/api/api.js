import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://countriesnow.space/api/v0.1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCountriesPopulation = () => {
  return apiClient.get('/countries/population');
};

const jikanClient = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAnimeRecommendations = () => {
  return jikanClient.get('/recommendations/anime');
};

export const getRandomAnime = () => {
  return jikanClient.get('/random/anime');
};

export const getRandomManga = () => {
  return jikanClient.get('/random/manga');
};

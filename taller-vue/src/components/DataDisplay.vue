<template>
    <div>
      <button @click="fetchCountriesPopulation">Get Countries Population</button>
      <button @click="fetchAnimeRecommendations">Get Anime Recommendations</button>
      <button @click="fetchRandomAnime">Get Random Anime</button>
      <button @click="fetchRandomManga">Get Random Manga</button>
      <div v-if="data">
        <pre>{{ data }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { getCountriesPopulation, getAnimeRecommendations, getRandomAnime, getRandomManga } from '../api/api';
  
  export default {
    setup() {
      const data = ref(null);
  
      const fetchCountriesPopulation = async () => {
        const response = await getCountriesPopulation();
        data.value = response.data;
      };
  
      const fetchAnimeRecommendations = async () => {
        const response = await getAnimeRecommendations();
        data.value = response.data;
      };
  
      const fetchRandomAnime = async () => {
        const response = await getRandomAnime();
        data.value = response.data;
      };
  
      const fetchRandomManga = async () => {
        const response = await getRandomManga();
        data.value = response.data;
      };
  
      return {
        data,
        fetchCountriesPopulation,
        fetchAnimeRecommendations,
        fetchRandomAnime,
        fetchRandomManga,
      };
    },
  };
  </script>
  
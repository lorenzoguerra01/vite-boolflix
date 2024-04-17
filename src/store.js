import { reactive } from 'vue';

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/',
  endPoint: {
    movie: 'search/movie',
    tv: 'search/tv'
  },
  options: {
    params: {
      api_key: '071d1fb8764d34420176e0d719b1f86e',
      language: 'it-IT',
      query: ''
    }
  },
  movies: [],
  tvs: [],
  imageUrl: 'https://image.tmdb.org/t/p/original',
  isLoading: false,
  error: {
    message: null
  }
});
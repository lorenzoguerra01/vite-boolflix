<template>
  <HeaderComponent/>
  <MainComponent/>
  
  
</template>

<script>
import { store } from './store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getMovies() {
      this.store.isLoading = true;
      axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options)
        .then((res) => {
          this.store.movies = res.data.results.map((movie) => {
            return {
              title: movie.title,
              oTitle: movie.original_title,
              language: movie.original_language,
              vote: movie.vote_average,
              iamge: this.store.imageUrl + movie.poster_path
            }
          });
          console.log(this.store.movies);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.store.isLoading = false;
        });
    },
    getTvs() {
      this.store.isLoading = true;
      axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options)
        .then((res) => {
          this.store.tvs = res.data.results.map((tv) => {
            return {
              title: tv.name,
              oTitle: tv.original_name,
              language: tv.original_language,
              vote: tv.vote_average,
              iamge: this.store.imageUrl + tv.backdrop_path
            }
          });
          console.log(this.store.tvs);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.store.isLoading = false;
        });
    },

  },
  mounted() {
    
  },
  created() {
    this.getMovies();
    this.getTvs();
  }
}
</script>

<style lang="scss" scoped></style>
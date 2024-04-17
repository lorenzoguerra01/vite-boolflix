<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>
</template>

<script>
import { store } from './store.js';
import axios from 'axios';

export default {
  name: 'App',
  components: {

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
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.store.isLoading = false;
        });
    },

  }
}
</script>

<style lang="scss" scoped></style>
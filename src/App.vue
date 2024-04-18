<template>
  <HeaderComponent />
  <MainComponent />

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
      store,
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
              language: this.getFlags(movie.original_language),
              vote: Math.ceil(movie.vote_average / 2),
              image: this.store.imageUrl + movie.poster_path,
              overview: movie.overview
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
              language: this.getFlags(tv.original_language),
              vote: Math.ceil(tv.vote_average / 2),
              image: this.store.imageUrl + tv.backdrop_path,
              overview: tv.overview
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
    getFlags(language) {
      switch (language) {
        case 'en': return 'gb'
        case 'ja': return 'jp'
        case 'zh': return 'cn'
        case 'he': return 'il'
        case 'ar': return 'sa'
        case 'ko': return 'kr'
        case 'nb': return 'no'
        case 'sv': return 'se'
        case 'el': return 'gr'
        case 'cs': return 'cz'
        case 'da': return 'dk'
        case 'fa': return 'ir'
        case 'hi': return 'in'
        case 'uk': return 'ua'
        default: return language
      }

    }
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
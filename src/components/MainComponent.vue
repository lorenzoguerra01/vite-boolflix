<template>
    <main>
        <h2>Film</h2>
        <div class="container">
            <div class="row g-3" v-if="!store.isLoading">
                <div class="col-12 col-md-6 col-lg-3" v-for="(movie, index) in store.movies" :key="index">
                    <CardComponent :title="movie.title" :oTitle="movie.oTitle" :language="movie.language"
                        :vote="movie.vote" :image="movie.image" />
                </div>
            </div>
            <ApiLoader v-else />
        </div>
        <h2>Serie TV</h2>
        <div class="container">
            <div class="row g-3" v-if="!store.isLoading">
                <div class="col-12 col-md-6 col-lg-3" v-for="(tv, index) in store.tvs" :key="index">
                    <CardComponent :title="tv.title" :oTitle="tv.oTitle" :language="tv.language" :vote="tv.vote"
                        :image="tv.image" />
                </div>
            </div>
            <ApiLoader v-else />
        </div>
    </main>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';
import ApiLoader from './ApiLoader.vue';
export default {
    name: 'MainComponent',
    components: {
        CardComponent,
        ApiLoader
    },
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped></style>
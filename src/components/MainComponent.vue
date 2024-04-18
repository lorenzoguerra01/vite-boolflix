<template>
    <main>
        <h2 v-if="!store.movies.length" class=" text-center fw-bold fs-1 p-5  ">Immettere il Titolo del Film o della
            Serie TV nella barra di ricerca in alto a destra</h2>

        <h2 class="p-5" v-if="store.movies.length">Film</h2>
        <CardListComponent type="movies" />
        <h2 class="p-5" v-if="store.movies.length">Serie TV</h2>
        <CardListComponent type="tvs" />
    </main>
</template>

<script>
import { store } from '../store.js';
import CardListComponent from './CardListComponent.vue';
export default {
    name: 'MainComponent',
    components: {
        CardListComponent
    },
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss">
#movies {
    img {
        height: 400px;
    }
}
</style>
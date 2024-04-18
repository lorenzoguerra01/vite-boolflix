<template>
    <main class="bg-dark pb-5 ">
        <h2 v-if="!store.movies.length && !store.tvs.length" class=" text-center text-white  fw-bold fs-1 p-5  ">
            Selezionare uno dei campi nel menù in alto <br><br>
            Immettere il Titolo del Film
            o della
            Serie TV nella barra di ricerca in alto a destra</h2>
        <div v-if="store.movies.length && store.flagMovie">
            <h2 class="p-5" v-if="store.movies.length">Film</h2>
            <CardListComponent type="movies" />
        </div>
        <div v-if="store.tvs.length && store.flagTv">
            <h2 class="p-5" v-if="store.movies.length">Serie TV</h2>
            <CardListComponent type="tvs" />
        </div>
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
            store,
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

#tvs {
    img {
        height: 150px;
        object-fit: contain;
    }
}

main {
    min-height: calc(100vh - 100px);
    color: white;
}
</style>
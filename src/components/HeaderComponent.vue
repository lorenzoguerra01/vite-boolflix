<template>
    <header class="bg-black p-3 d-flex justify-content-between">
        <h1 class="text-danger fw-semibold align-self-center">Boolflix</h1>
        <ul class=" d-flex gap-5 align-self-center pt-3">
            <li :class="{ 'selected': !store.flagMovie && !store.flagTv }"><a href="#" class="text-white"
                    @click="store.flagMovie = false, store.flagTv = false, store.options.params.query = '', $parent.getMovies(), $parent.getTvs()">Home</a>
            </li>
            <li :class="{ 'selected': !store.flagMovie && store.flagTv }"><a href="#" class="text-white"
                    @click="store.flagMovie = false, store.flagTv = true">Serie Tv</a></li>

            <li :class="{ 'selected': store.flagMovie && !store.flagTv }"><a href="#" class="text-white"
                    @click="store.flagMovie = true, store.flagTv = false">Film</a></li>
            <li :class="{ 'selected': store.flagMovie && store.flagTv }"><a href="#" class="text-white"
                    @click="store.flagMovie = true, store.flagTv = true">Tutti</a></li>
            <li><a href="#" class="text-white">Nuovi e popolari</a></li>
            <li><a href="#" class="text-white">La mia lista</a></li>

        </ul>
        <div class="input-group w-25">
            <input type="text" class="form-control" placeholder="Cerca titolo Film o Serie TV"
                aria-label="Recipient's username" aria-describedby="button-addon2" v-model="store.options.params.query"
                @keyup.enter="store.flagMovie || store.flagTv ? $parent.getTvs() : null, store.flagMovie || store.flagTv ? $parent.getMovies() : null">
            <button class="btn btn-danger" type="button" id="button-addon2"
                :disabled="!store.flagMovie && !store.flagTv"
                @click="$parent.getMovies(); $parent.getTvs()">Cerca</button>
        </div>
    </header>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    height: 100px;
}

a {
    text-decoration: none;
}

.selected {
    border-bottom: 2px solid red;
}
</style>
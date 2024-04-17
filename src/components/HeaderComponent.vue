<template>
    <header class="bg-black p-3 d-flex justify-content-between ">
        <h1 class="text-danger fw-semibold ">Boolflix</h1>
        <div class="input-group w-25">
            <input type="text" class="form-control" placeholder="Cerca titolo Film o Serie TV"
                aria-label="Recipient's username" aria-describedby="button-addon2" v-model="store.options.params.query"
                @keyup.enter="$parent.getMovies(); $parent.getTvs()">
            <button class="btn btn-danger" type="button" id="button-addon2"
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
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>
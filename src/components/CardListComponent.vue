<template>
    <div :id="type" class="container">
        <div class="row g-3" v-if="!store.isLoading">
            <div class="col-12 col-md-6 col-lg-3" v-for="(watch, index) in store[type]" :key="index">
                <CardComponent :title="watch.title" :oTitle="watch.oTitle" :language="watch.language"
                    :vote="watch.vote" :image="watch.image" />
            </div>
        </div>
        <ApiLoader v-else />
    </div>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';
import ApiLoader from './ApiLoader.vue';
export default {
    name: 'CardListComponent',
    props: ['type'],
    components: {
        CardComponent,
        ApiLoader
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>
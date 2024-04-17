<template>
    <div class="card h-100">
        <img :src="image" class="card-img-top" :alt="title">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ oTitle }}</p>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'CardComponent',
    props: ['title', 'oTitle', 'language', 'vote', 'image'],
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>
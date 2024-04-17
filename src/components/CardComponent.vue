<template>
    <div class="card h-100">
        <img :src="image" class="card-img-top" :alt="title">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="pb-3">{{ oTitle }}</p>
            <div class="position-bottom-left">
                <span :class="[vote < 3 ? 'bg-danger' : 'bg-success', 'badge', 'rounded-pill']">{{ vote }}</span>
                <i v-for="stars in vote" :key="stars" class="fa-solid fa-star text-warning"></i>
                <i v-for="stars in 5 -vote" :key="stars" class="fa-solid fa-star text-warning-emphasis"></i>
            </div>
            <span :class="` border fi fi-${language} position-bottom-right`"></span>
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

<style lang="scss" scoped>
.position-bottom-right {
    position: absolute;
    bottom: 10px;
    right: 10px;
}

.position-bottom-left {
    position: absolute;
    bottom: 10px;
    left: 10px;
}
</style>
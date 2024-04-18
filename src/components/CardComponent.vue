<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="card flip-card-front">
                <img :src="image" class="card-img-top" :alt="title">
                <div class="card-body">
                    <h5 class="card-title">{{ title }}</h5>
                    <p class="pb-3">{{ oTitle }}</p>
                    <div class="position-bottom-left">
                        <span :class="[vote < 3 ? 'bg-danger' : 'bg-success', 'badge', 'rounded-pill']">{{ vote
                            }}</span>
                        <i v-for="stars in vote" :key="stars" class="fa-solid fa-star text-warning"></i>
                        <i v-for="stars in 5 - vote" :key="stars" class="fa-solid fa-star text-warning-emphasis"></i>
                    </div>
                    <span :class="` border fi fi-${language} position-bottom-right`"></span>
                </div>
            </div>
            <div class="card flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
            </div>
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

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
    background-color: transparent;
    height: 100%;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
    background-color: #bbb;
    color: black;
}

/* Style the back side */
.flip-card-back {
    width: 50%;
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
    position: absolute;
    top: 0;
    left: 0;
}
</style>

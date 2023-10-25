<script setup>

import { ref } from 'vue'

const props = defineProps({
    title: String,
    employerName: String,
    employerCoverUrl: String,
    type: String,
    sector: String,
    location: {
        postalCode: String,
        city: String,
    },
    description: String,
    date: String
})

const backgroundImageStyle = ref(`linear-gradient(to right,
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.35)),
        linear-gradient(to right,
            rgba(18, 194, 233, 0.65),
            rgba(196, 113, 237, 0.65)),
        url("https://app.staging.profilpublic.fr${props.employerCoverUrl}")`)

</script>


<template>
    <div class="job-item">
        <div class="job-item-header" v-bind:style="{ backgroundImage: backgroundImageStyle }">
            <h2 class="header-title">{{ title }}</h2>
            <h3 class="header-employer">{{ employerName }}</h3>
        </div>
        <div class="job-item-infos">
            <div class="job-type-and-sector">
                <div class="job-type">
                    <p>{{ type }}</p>
                </div>
                <div v-if="sector !== null" class="job-sector">
                    <p>{{ sector }}</p>
                </div>
            </div>
            <p v-if="location !== null" class="infos-location">{{ location.postalCode }} {{ location.city }}</p>
            <p class="infos-description">{{ description }}</p>
            <p class="infos-date">Publiée le {{ date }}</p>
        </div>
    </div>
</template>


<style scoped>

h2, h3, p {
    margin: 0px;
    padding: 0px;
}
.job-item {
    max-width: 380px;
    min-width: 320px;

    border-radius: 15px;
    background-color: white;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: transform .1s;
}
.job-item:hover {
  transform: scale(1.02);
  cursor: pointer;
}
.job-item-header {
    height: 120px;
    padding-left: 25px;
    padding-right: 25px;
    color: white;

    background-position: center;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.header-title {
    font-size: 22px;
    font-weight: 700;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.header-employer {
    font-size: 16px;
    font-weight: 400;
    margin-top: 4px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.job-item-infos {
    height: 145px;
    background-color: white;;
    padding: 15px 25px 15px 25px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.job-type-and-sector {
    display: flex;
    font-weight: 700;
    font-size: 14px;
}
.job-type {
    display: flex;
    color: white;
    padding: 2px 15px 2px 15px;
    border-radius: 6px;

    background: linear-gradient(to right,
            rgba(18, 194, 233, 1),
            rgba(196, 113, 237, 1));

    align-items: center;
    justify-content: center;
    margin-right: 10px;
}
.job-sector {
    border: double 1.5px transparent;
    border-radius: 6px;
    background-image: linear-gradient(white, white), linear-gradient(to right,
            rgba(18, 194, 233, 1),
            rgba(196, 113, 237, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;
}
.job-sector p {
    padding: 2px 20px 2px 20px;
    background: -webkit-linear-gradient(right,
            rgba(18, 194, 233, 1),
            rgba(196, 113, 237, 1));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.infos-location {
    font-weight: 400;
    font-size: 15px;
    color: #151515;
}
.infos-description {
    font-weight: 300;
    font-size: 14px;
    color: #151515;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.infos-date {
    font-size: 13px;
    font-weight: 400;
    color: #B6B6B6;
    margin-top: 4px;
}

</style>
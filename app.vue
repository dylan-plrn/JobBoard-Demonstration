<script setup>

import { ref } from 'vue'

const jobs = ref(null)

function fetchJobs() {
  fetch("https://app.staging.profilpublic.fr/api/jobs?filters[moderated]=true&filters[publicOpen]=true&fields[0]=title&fields[1]=type&fields[2]=answer1&fields[3]=createdAt&populate[sectors][fields][0]=name&populate[employer][fields][0]=name&populate[employer][populate][cover][fields][0]=url&populate[locations][fields][0]=postalCode&populate[locations][fields][0]=city")
    .then(response => response.json())
    .then(data => {
      jobs.value = data.data
      formatJobs()
    })
    .catch(() => {
      console.log("error fetching jobs")
    })
}

function formatJobs() {
  jobs.value.map((job) => {
    job.answer1 = job.answer1.replaceAll(/<[^>]+>/g, '')
    const date = new Date(job.createdAt)
    job.createdAt = `${date.getDate() < 10 ? "0" : ""}${date.getDate()}/${date.getMonth() + 1 < 10 ? "0" : ""}${date.getMonth() + 1}/${date.getFullYear()}`
    job.type = job.type.toUpperCase()
    if (job.type == "INTERNSHIP") { job.type = "STAGE" }
  })
}

fetchJobs()

</script>


<template>
  <header>
    <h1>JobBoard Démonstration - Dylan PLEURON</h1>
  </header>
  <main>
    <JobAd v-for="job in jobs" :key="job.id" :title="job.title" :employerName="job.employer.name"
      :employerCoverUrl="job.employer.cover.url" :type="job.type"
      :sector="job.sectors.length != 0 ? job.sectors[0].name : null"
      :location="job.locations.length != 0 ? job.locations[0] : null" :description="job.answer1" :date="job.createdAt" />
  </main>
</template>


<style scoped>
header {
  z-index: 99;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

header h1 {
  text-align: center;
  width: 90%;
  margin: 0;
  font-size: 26px;
  font-weight: 400;

  background: -webkit-linear-gradient(right,
      rgba(18, 194, 233, 1),
      rgba(196, 113, 237, 1));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

main {
  background-color: white;
  margin: auto;
  width: 90%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 380px));
  justify-content: center;
  gap: 40px;

  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 40px;
  margin-top: 80px;
}
</style>






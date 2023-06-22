<template>
    <div class="photo-info">
        <h1>photo detail</h1>
        <img class="img" :src="photo.download_url" alt="Photo detail">

        <p>info : {{ photo.url }}</p>
        <p>Author : {{ photo.author }}</p>
        <nuxt-link to="/photos" > Back </nuxt-link>
    </div>
</template>
<script>
 export default{
    async asyncData({ $axios , params }) {
    const photo = await $axios.$get(`/id/${params.id}/info`) 
    console.log('photo', photo)
    return {photo}
    },
 }
</script>
<style scoped>
  .photo-info {
    width: 860px;
    margin: 0 auto;
    text-align: center;
  }
  .img {
    width: 100%;
  }

  .link {
    display: inline-block;
    margin-top: 2em;
  }
</style>
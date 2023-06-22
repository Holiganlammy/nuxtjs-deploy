<template>

    <div>
        <h1>User Detail</h1>

        <p>{{ iduser }}</p>
    </div>
</template>
<script>
export default{
    data(){
        return{
            iduser: this.$route.params.iduser,
        }
    },
}
</script>
<style>
</style>
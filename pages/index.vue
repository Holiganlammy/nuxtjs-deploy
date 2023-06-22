<template>
  <div>
    <h1>User List</h1>
    <nuxt-link to="/abouttest">Go to about</nuxt-link>
    <nuxt-link to="/users">Goto user</nuxt-link>
    <nuxt-link to="/photos">Photos</nuxt-link>
    <nuxt-link to="/testdynamic">test</nuxt-link>
    <div class="links">
      <button @click="logout">logout</button>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      title: 'Hello',
    }
  },
  methods:{
    async logout(e){
      await this.$auth.logout()
      this.$router.push('/login')
    }
  },
}
</script>

<template>
    <div>
        <h1>
            User Index
        </h1>      
        <ul>
            <li v-for="user in users" :key="user.id">
            <nuxt-link :to="`/users/${user.id}`">{{ user.id }}</nuxt-link> <!-- กำหนดให้ userid หรือตัวเลือก ชื่อตัวเลือกuser ตรงกับ url -->
            </li>
        </ul>
        <nuxt-link to="/"> back</nuxt-link>
    </div>
</template>

<script>
 export default {
    middleware:'auth',
    data(){
        return{
            users: [{id: 1},{id:2},{id:3}],
        }
    },
 }
</script>
<template>

    <div>
        <h1>User Detail</h1>

        <p>{{ id }}</p> <!-- แสดงตัวแปร id จากหน้าอื่น -->
        <nuxt-link to="/users">back</nuxt-link>
    </div>
</template>

<script>
export default{
    // ตัวแปรบังคับ params ให้สามารถใช้ได้กี่อย่างถ้าบังคับไว้ในเงื่อนไขจะเปิดได้ถ้าไม่ใส่ในเงื่อนไขเปิดไม่ได้
    // เวลาตั้งชื่อไฟล์จะใช้ params ต้องมี _ หน้าชื่อไฟล์เสมอ
   /* validate({ params }){ 
        return params.slug === '1'
    }, */
    data(){ // ข้อมูล users dynamic แสดงข้อมูล User
        return{
            id:this.$route.params.slug,
        }
    },
}
</script>
<style>
</style>
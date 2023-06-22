<template>
  <div>
    <h1>
        Test
        <nuxt-link to="/">Go to home</nuxt-link>
    </h1>
  </div>
</template>


<script>
export default {
    layout:'admin',
    middleware:['auth'] // ถ้าไม่ใส่จะไม่เข้าหน้าล็อคอิน การใช้งานจะอยู่ในไฟล์ middle แต่บางฟังก์ชั่นจะไม่ต้องสร้างไฟล์
}
</script>
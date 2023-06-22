-<template>
    <div>
        <v-alert text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus..."></v-alert>
        <select v-model="selectedz">
<option disabled value="">Please select one</option>
<option>A</option>
<option>B</option>
<option>C</option>
</select>
<span>Selected: {{ selectedz }}</span>
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
            selectedz:this.$route.params.slug,
        }
    },
}
</script>
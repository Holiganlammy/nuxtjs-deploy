<template>
    <form @submit="onSubmit">
        <input v-model="email" type="email"  />
        <input v-model="password" type="password"  />

        <button type="submit">Login</button>
    </form>
</template>
<script>
    export default{
        data(){
            return{
                email:'admin@admin.com',
                password:'123456'
            }
        },
        methods:{
            async onSubmit(e) {
            e.preventDefault()
                
            const payload ={
                data:{
                    email: this.email, // email - password เป็น local สามารถใช้ที่ไหนก็ได้
                    password: this.password
                }
            }
            try {           
                 
                await this.$auth.loginWith('local',payload) // ปล this เป็นค่า global สามารถใช้ได้ทุกที่
                
            } catch (error) {
                console.log(error)
            }
        },
    },
}
</script>
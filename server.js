const express = require('express')
const cors = require('cors')
/* import Vue from "vue"
import VueSimpleAlert from "vue-simple-alert"; */
Vue.use(VueSimpleAlert);

const mockToken = 'dd7570037392e5d0bf80cf9dd51bb7808872a511b3a4d7f7z9d8e5q'
const mockUser = {
    id:1,
    name:'John Donovan',
    email:'asd@asd.com'
}

const app = express()
app.use(cors())
app.use(express.json())
const router = express.Router()

router.get ('/me', (req,res) => { // เก็บข้อมูล token ลงใน /me ที่อยู่ config.js
    const headers = req.headers.authorization;
    const token = headers && headers.split(' ')[1]

    if(token === mockToken){
        return res.json({
            user: mockUser
        })
    } else {
        res.status(401).json({ messange: 'Invalid token'})
    }
})
router.post('/login', (req,res) => { // เก็บข้อมูลล็อคอิน User token ไว้ที่ /login ที่อยู่ config.js
    const {email,password} = req.body

    if(email === 'admin@admin.com' && password === '123456'){
        return res.json({
            user: mockUser,
            token: mockToken
        })
    } else {
         return res.status(401).json({ messange: 'Invalid password'})
        // this.$alert("Hello Vue Simple Alert.",email,password);
    }
})
app.use ('/api',router)
app.listen(12345, () =>{ console.log (' Running at port12345 ')
})
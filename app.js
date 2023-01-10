const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const os = require('os')
const { get } = require('http')
//load config
dotenv.config({ path: './config/.env'})

const app = express()

//static folders
app.use(express.static(path.join(__dirname, 'public')))

app.use('/os', (req,res) => {
    res.json({'osName': os.platform(), 'osHost': os.hostname()})
})

const PORT = process.env.PORT

app.listen(process.env.PORT||PORT,() => {
    console.log(`server running on ${process.env.PORT} go catch it`)
})

// const os = require('os');
// console.log("Platform: " + os.platform());
// console.log("Architecture: " + os.arch());
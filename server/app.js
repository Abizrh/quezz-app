const express = require('express')
const router = require('./routes')
const app = express()
const port = 3000
const axios = require('axios')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)
// app.get('/', (req, res) => res.status(200).json('halooo'))

// app.get('/', async (req, res) => {

//     try {
            
//         const { data } = await axios({
//             method: 'get',
//             url: 'https://quizapi.io/api/v1/questions?limit=5&category=code',
//             headers: {
//                 "X-Api-Key": "uaTAxcxHwNnX1wH1wQwjHhA0kHC9HSxoT9WoaOow"
//             }
//         })

//         console.log(data)
//         res.status(200).json(data)

//     } catch (error) {

//         console.log(error)
        
//     }

// })

app.listen(port, () => console.log('listen on port ' +  port))
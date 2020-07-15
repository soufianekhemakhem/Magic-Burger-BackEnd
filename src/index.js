import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import router from './config/routes'

const app = express()

app.use(cors())
app.use(bodyParser.json()) // pour utiliser Raw Json dans le postman 
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost:27017/DBTraining', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => { error ? console.log(error) : console.log('Database is connected') })

app.use('/', router)

app.listen(3000, () => {
    console.log('Is working on port 3000')
})

// import User from './components/user/user'
// // let users = []

// app.get('/sayHi/:name', (req, res) => {
//     console.log('A')
//     return res.json({ message: 'Hi ' + req.params.name })
// })

// app.get('/users', async (req, res) => {

//     // User.find()
//     //     .then((result) => {
//     //         return res.json(result)
//     //     })
//     //     .catch((error) => {
//     //         return res.json(error)
//     //     })

//     try {

//         const users = await User.find()

//         return res.json(users)


//     } catch (error) {
//         return res.json(error)
//     }
// })

// app.post('/user', (req, res) => {
//     console.log('B')

//     // users.push(req.body)

//     User.create(req.body)
//         .then((result) => {
//             return res.json({
//                 message: 'jawek fessfess',
//                 result: result
//             })
//         })
//         .catch((error) => {
//             return res.json(error)
//         })

// })

// app.delete('/user/:cin', (req, res) => {
//     // const cin = req.params.cin
//     // const index = users.findIndex((item) => {
//     //     return item.cin === cin
//     // })

//     // if (index == -1)
//     //     return res.json({ message: 'User is not found' })

//     // users.splice(index, 1)
//     // return res.json({ message: 'jawek fessfess' })

//     User.remove({ cin: req.params.cin })
//         .then((result) => {
//             return res.json({
//                 message: 'jawek fessfess',
//                 result: result
//             })
//         })
//         .catch((error) => {
//             return res.json(error)
//         })
// })

// app.put('/user/:cin', (req, res) => {
//     // const cin = req.params.cin
//     // const index = users.findIndex((item) => {
//     //     return item.cin === cin
//     // })

//     // if (index == -1)
//     //     return res.json({ message: 'User is not found' })

//     // users[index].name = req.body.name
//     // return res.json({ message: 'jawek fessfess' })

//     User.update({ cin: req.params.cin }, { name: req.body.name })
//         .then((result) => {
//             return res.json({
//                 message: 'jawek fessfess',
//                 result: result
//             })
//         })
//         .catch((error) => {
//             return res.json(error)
//         })
// })

// app.listen(3000, () => {
//     console.log('Is working on port 3000')
// })

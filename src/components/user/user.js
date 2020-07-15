import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    email: { type: String },
    password: { type: String },
    token: { type: String },
    role: { type: String, default: 'client' }
})

export default mongoose.model('user', userSchema)

// import mongoose, {Schema} from 'mongoose'
// const userSchema = new Schema({
//     Name: { type: String },
//     lastName: { type: String },
//     cin: { type: Number }
// })
// export default mongoose.model('user', userSchema)
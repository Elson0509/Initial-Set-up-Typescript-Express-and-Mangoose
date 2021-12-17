import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  email?: string
  userName?: string
}

const UserSchema = new Schema(
  {
    email: String,
    userName: String
  },
  {
    timestamps: true
  }
)

export default model<UserInterface>('User', UserSchema)

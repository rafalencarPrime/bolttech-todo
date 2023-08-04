
import mongoose from 'mongoose';

const Types = mongoose.Schema.Types;

const UserSchema = mongoose.Schema({

    email: { type: Types.String, unique: true, required: true},
    password: { type: Types.String },

})

const User = mongoose.model('User', UserSchema);

export default User;

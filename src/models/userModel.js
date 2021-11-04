const mongose = require('mongoose');

const userSchema = new mongose.Schema({

    username: {type: String, required: true},
    passwrod: {type: String, required: true},
    privateAccount: {type: Boolean, required: false, default: false},

    folowers: [{type: mongose.Schema.Types.ObjectId, req: "users"}],
    following: [{type: mongose.Mongoose.Schema.Types.ObjectId, req: "users"}],
    profilePicUrl: {type: String, required: false, default: ''},
    bio: {type: String, required: false, default: ''},
    savedPosts: [],
    archivedPosts: []
},
{
    timestamps: true,
})

module.exports = mongoose.model("users", userSchema)
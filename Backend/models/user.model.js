const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        
    },
    email:{
        type:String,
        unique: true
    },
    mobile:{
        type:String
       
    },
    password:{
        type:String
        
    },
    saltSecret: String
},{timestamps: true});
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});
mongoose.model('User',userSchema);

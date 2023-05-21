const mongooose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongooose.Schema({
    name:String,
    email:{ type: String, required: true, unique: true },
    password:{ type: String, required: true},
    address:String,
    phoneNumber:String,
    CNIC:Number,
});

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  });

  userSchema.methods.comparePassword = function (password, callback) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
      if (err) return callback(err);
      callback(null, isMatch);
    });
  };

const User = mongooose.model('USERS',userSchema);

module.exports = User;
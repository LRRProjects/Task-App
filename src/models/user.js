const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Task = require("./task.js");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid.");
        }
      },
    },
    age: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) {
          throw new Error("Age must be > 0.");
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error("Password cannot be the word 'password'.");
        }
      },
    },

    avatar: {
      type: Buffer,
    },

    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

/*A virtual property is a relationship between 2 entities,
in this case our user and task.It is a way for the mongoose module
to determine how the 2 entities are related*/
userSchema.virtual("tasks", {
  ref: "Tasks",
  localField: "_id",
  foreignField: "Owner_id",
});

//Makes the method available on instance, it's an instance methods
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ id: user.id.toString() }, "helloIamtokenphrase");
  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;
  delete userObject.avatar;

  return userObject;
};

//Makes the statics available on the model, model methods
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Unable to login.");
  }

  const isMatched = await bcrypt.compare(password, user.password);

  if (!isMatched) {
    throw new Error("Unable to login.");
  }

  return user;
};

/*By creating a schema using the mongoose module we can run
middleware to do something pre or post
validation or we can do something pre or post the entry being saved*/
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

//Delete the users tasks when the user deletes his profile
userSchema.pre("remove", async function (next) {
  const user = this;
  await Task.deleteMany({ Owner_id: user.id });

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;

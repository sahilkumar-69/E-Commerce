import { model, Schema } from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
    default: {
      0:1
    },
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      id: this._id,
      name: this.name,
    },
    "secret_jwt_token",
    {
      expiresIn: "7d",
    }
  );
};

export default model("User", userSchema);

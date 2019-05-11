import { compare, genSalt, hash as bcHash } from 'bcryptjs';
import { Document, model, Schema } from 'mongoose';

import { User } from '../../shared/models';

export interface UserInput extends User {
  password?: string;
  comparePassword(candidatePassword: string, callback: (error: Error, isMatch?: boolean) => void): void;
}

export type UserType = UserInput & Document;

const userSchema = new Schema<UserType>({
  username: { type: String, require: true },
  email: { type: String, unique: true, lowercase: true, trim: true },
  password: String,
  role: String
});

// Before saving the user, hash the password
userSchema.pre<UserType>('save', function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcHash(user.password, salt, (error, hash) => {
      if (error) {
        return next(error);
      }

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword: string, callback: (error: Error, isMatch?: boolean) => void) {
  compare(candidatePassword, this.password, (err: Error, isMatch: boolean) => {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

// Omit the password when returning a user
userSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    delete ret.password;
    return ret;
  }
});

export default model<UserType>('User', userSchema);

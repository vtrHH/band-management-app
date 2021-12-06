const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Bitte gib deinen Namen an']
    },
    username: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Bitte such dir einen Spitznamen für die Plattform aus']
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, 'Bitte gib deine eMail-Adresse an']
    },
    passwordHashAndSalt: {
      type: String
    },
    profilePicture: {
      type: String
    }
  },
  { discriminatorKey: 'role' }
);

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);

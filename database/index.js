import Sequelize from 'sequelize';
import config from './config/config.mjs';
import HelperProfile from './models/helperprofile.js';
import Request from './models/request.js';
import Review from './models/review.js';
import User from './models/user.js'

const db = {};
db.HelperProfile = HelperProfile;
db.Request = Request;
db.Review = Review;
db.User = User;

let sequelize;
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(config.production);
} else {
  sequelize = new Sequelize(config.development);
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;

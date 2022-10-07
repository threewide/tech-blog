const sequelize = require('../config/connection');
const seedBlogPosts = require('./blogPostData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlogPosts();

  process.exit(0);
};

seedAll();

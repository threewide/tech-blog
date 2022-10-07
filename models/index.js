const User = require('./User');
const Blog_Post = require('./Blog_Post');

User.hasMany(Blog_Post, {
  foreignKey: 'username_id',
});

Blog_Post.belongsTo(User, {
  foreignKey: 'username_id',
});

module.exports = { User, Blog_Post };

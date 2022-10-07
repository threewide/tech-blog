const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog_Post extends Model {}

Blog_Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    submission_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    blog_contents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog_post',
  }
);

module.exports = Blog_Post;

const { Blog_Post } = require('../models');

const blogPostData = [
  {
    title: 'Why MVC is so important',
    submission_date: 'Oct 04, 2020',
    blog_contents: 'MVC allows developers to maintain a true seperation of concerns, devising their code between the Model layer for data, the View Layer for design, and the Controller layer for application logic.',
    username_id: 1,
  },
  {
  title: 'Authentication vs. Authorization',
  submission_date: 'Jan 01, 2019',
  blog_contents: 'MVC allows developers to maintain a true seperation of concerns, devising their code between the Model layer for data, the View Layer for design, and the Controller layer for application logic.',
  username_id: 1,
  },
  {
    title: 'Authentication vs. Authorization',
    submission_date: 'Feb 17, 2018',
    blog_contents: 'MVC allows developers to maintain a true seperation of concerns, devising their code between the Model layer for data, the View Layer for design, and the Controller layer for application logic.',
    username_id: 1,
  },
];

const seedBlogPosts = () => Blog_Post.bulkCreate(blogPostData);

module.exports = seedBlogPosts;

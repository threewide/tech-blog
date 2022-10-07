const router = require('express').Router();
const { User, Blog_Post } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      include: [
        {
          model: Blog_Post,
          attributes: ['title', 'submission_date', 'blog_contents', 'username_id'],
        },
      ],
    });

    const users = dbUserData.map((user) =>
      user.get({ plain: true })
    );

    res.render('homepage', {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
router.get('/user/:id', withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Blog_Post,
          attributes: [
            'id',
            'title',
            'submission_date',
            'blog_contents',
            'username_id',
          ],
        },
      ],
    });

    const user = dbUserData.get({ plain: true });
    res.render('user', { user, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(1, {
      include: [
        {
          model: Blog_Post,
          attributes: [
            'id',
            'title',
            'submission_date',
            'blog_contents',
            'username_id',
          ],
        },
      ],
    });

    const user = dbUserData.get({ plain: true });
    res.render('user', { user, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
// Use the custom middleware before allowing the user to access the painting
router.get('/blog_post/:id', withAuth, async (req, res) => {
  try {
    const dbBlogPostData = await Blog_Post.findByPk(req.params.id);

    const blog_post = dbBlogPostData.get({ plain: true });

    res.render('blog_post', { blog_post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

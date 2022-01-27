/* server.js file configuration. */

const express = require('express');

/* Importing user schema model.  */

const User = require('./models/User');

/* Calling express router. */

const router = express.Router();

/* All CRUD operations.  */
/* Creating the four routes. */

/* Getting all existing books in our collection.  */

router.get('/', async (req,res) => {
    try{
        const Users = await User.find();
        res.json(Users);
    } catch (err) {
        res.json({ message: err });
    }   
});

/* Adding a new book. */

router.post('/', async (req,res) => {
    const user = new User({
          title: req.body.title,
          description: req.body.description
        });
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err });
    }   
});

/* Editing the book (post content). */

router.patch('/:postId', async (req,res) => {
    try{
        const updatedBook = await User.updateOne({_id: req.params.postId }, {$set: { title: req.body.title, description: req.body.description } } );
        res.json(updateBook);
    } catch (err) {
        res.json({ message: err });
    }   
});

/* Deleting a book. */

router.delete('/:postId', async (req,res) => {
    try{
        const removedUser = await User.remove({_id: req.params.postId });
        res.json(removedUser);
    } catch (err) {
        res.json({ message: err });
    }   
});

/* Exporting all the routes.  */

module.exports = router;
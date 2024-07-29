// routes/blog.js
const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blog.model');

// Create a new blog post
router.post('/blog', async (req, res) => {
    const { title, content, author } = req.body;
    const newPost = new BlogPost({ title, content, author });
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all blog posts
router.get('/blog', async (req, res) => {
    try {
        const posts = await BlogPost.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single blog post by ID
router.get('/blog/:id', async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id);
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find post' });
        }
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a blog post
router.put('/blog/:id', async (req, res) => {
    const { title, content, author } = req.body;
    try {
        const post = await BlogPost.findByIdAndUpdate(
            req.params.id,
            { title, content, author },
            { new: true }
        );
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find post' });
        }
        res.json(post);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a blog post
router.delete('/blog/:id', async (req, res) => {
    try {
        const post = await BlogPost.findByIdAndDelete(req.params.id);
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find post' });
        }
        res.json({ message: 'Deleted post' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

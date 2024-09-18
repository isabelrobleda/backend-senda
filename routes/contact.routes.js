// routes/contact.js
const express = require('express');
const router = express.Router();
const ContactForm = require('../models/contact.model');

// Create a new contact post
router.post('/contacto', async (req, res) => {
    const { FirstName, LastName, Phone, Email, Message } = req.body;
    const newPost = new ContactForm({ FirstName, LastName, Phone, Email, Message });
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all posts
router.get('/contacto', async (req, res) => {
    try {
        const posts = await ContactForm.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single  post by ID
router.get('/contacto/:id', async (req, res) => {
    try {
        const post = await ContactForm.findById(req.params.id);
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find contact' });
        }
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a blog post
router.put('/contacto/:id', async (req, res) => {
    const { FirstName, LastName, Phone, Email, Message } = req.body;
    try {
        const post = await ContactForm.findByIdAndUpdate(
            req.params.id,
            { FirstName, LastName, Phone, Email, Message },
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

// Delete a contact post
router.delete('/contacto/:id', async (req, res) => {
    try {
        const post = await ContactForm.findByIdAndDelete(req.params.id);
        if (post == null) {
            return res.status(404).json({ message: 'Cannot find post' });
        }
        res.json({ message: 'Deleted post' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

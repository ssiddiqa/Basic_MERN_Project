const express = require("express");
const mongoose = require("mongoose");
const User = require('../models/userModel');

const router = express.Router();

// Create operation

router.post("/", async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const userAdded = await User.create({
            name: name,
            email: email,
            age: age,
        });
        
        res.status(201).json(userAdded);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

// Get Operation
router.get("/", async (req, res) => {
    try {
       const showAll = await User.find();
       res.status(200).json(showAll);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Get single User
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
       const singleUser = await User.findById(id);
       if (!singleUser) {
           return res.status(404).json({ error: 'User not found' });
       }
       res.status(200).json(singleUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Delete Operation
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
       const deletedUser = await User.findByIdAndDelete(id);
       if (!deletedUser) {
           return res.status(404).json({ error: 'User not found' });
       }
       res.status(200).json(deletedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Update Operation
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    try {
       const updateUser = await User.findByIdAndUpdate(id, req.body, {
           new: true,
       });
       if (!updateUser) {
           return res.status(404).json({ error: 'User not found' });
       }
       res.status(200).json(updateUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

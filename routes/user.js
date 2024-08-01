const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let users = [];

// Create a new user
router.post('/', (req, res) => {
    const user = { id: uuidv4(), ...req.body };
    users.push(user);
    res.send(user);
});

// Get all users
router.get('/', (req, res) => {
    res.send(users);
});

// Get a user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) {
        return res.status(404).send();
    }
    res.send(user);
});

// Update a user by ID
router.put('/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).send();
    }
    const updatedUser = { ...users[userIndex], ...req.body };
    users[userIndex] = updatedUser;
    res.send(updatedUser);
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).send();
    }
    const deletedUser = users.splice(userIndex, 1);
    res.send(deletedUser);
});

module.exports = router;

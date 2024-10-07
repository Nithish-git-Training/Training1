const UserService = require('../services/UserService');

exports.register = async (req, res) => {
    try {
        const { username, password, email, status } = req.body;  // Ensure these fields are being pulled from the request
        const user = await UserService.register(username, password, email, status);
        res.status(201).json({ message: 'User created', userId: user.id });
    } catch (error) {
        console.error(error);  // Log the full error for debugging
        res.status(500).json({ message: 'Error registering user', error: error.errors || error.message });
    }
};

exports.registerWithConfirmation = async (req, res) => {
    const { username, password, email, confirmPassword } = req.body;
    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        const user = await UserService.register(username, password, email);
        res.status(201).json({ message: 'User created', userId: user.id });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await UserService.login(username, password);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await UserService.updateUser(req.params.id, req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await UserService.deleteUser(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

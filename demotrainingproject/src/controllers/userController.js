const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register = async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });
    res.status(201).json({ id: user.id, email: user.email });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};

exports.getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};


exports.getUserById = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const updatedData = { email };
    if (password) {
        updatedData.password = await bcrypt.hash(password, 10);
    }
    await User.update(updatedData, { where: { id } });
    res.json({ message: 'User updated successfully' });
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.sendStatus(204);
};

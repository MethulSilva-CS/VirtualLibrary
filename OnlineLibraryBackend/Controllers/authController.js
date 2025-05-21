class AuthController {
  static login(req, res) {
    const { username, password } = req.body;

    // Dummy user
    const USER = {
      username: 'admin',
      password: '1234',
    };

    if (username === USER.username && password === USER.password) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  }
}

module.exports = AuthController;

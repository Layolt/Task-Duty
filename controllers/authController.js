const registerUser = (req, res) => {
  res.json({ message: req.body.username });
};

const loginUser = (req, res) => {
  res.json({ message: "login User" });
};

const getUser = (req, res) => {
  res.json({ message: "Get User" });
};

module.exports = { registerUser, loginUser, getUser };

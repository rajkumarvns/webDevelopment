import User from "../models/user.Schema.js";
export const loginUser = (req, res) => {
  res.json({ message: "login successfull from controller" });
};
export const logoutUser = (req, res) => {
  res.json({ message: "logout User successfull from controller" });
};
export const registerUser = async (req, res) => {
  // res.json({ message: "register user successfull from controller" });
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;
    if (!fullName || !email || !password || !phone || !gender || !dob) {
      res.status(400).json({ message: "All field required" });
      return;
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "email already registered" });
      return;
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

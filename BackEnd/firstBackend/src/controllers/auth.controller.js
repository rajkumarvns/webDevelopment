import User from "../models/user.model.js";
export const loginUser = (req, res) => {
  res.json({ message: "login successfull from controller" });
};
export const LogoutUser = (req, res) => {
  res.json({ message: "LogoutUser successfull from controller" });
};
export const RegisterUser = async (req, res) => {
  // res.json({message:"RegisterUser successfull from controller"});
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;
    if (!fullName || !email || !password || !phone || !gender || !dob) {
      res.status(400).json({ message: "All field required" });
      return;
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(409).json({ message: "Email already Registered" });
      return;
    }
  } catch (error) {
    console.log({ message: "Something wrong it's catch error" });
  }
};

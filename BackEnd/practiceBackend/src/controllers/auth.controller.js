import User from "../models/user.Schema.js";
export const loginUser = (req, res) => {
  res.json({ message: "login successfull from controller" });
};
export const logoutUser = (req, res) => {
  res.json({ message: "logout User successfull from controller" });
};
export const registerUser = async (req, res, next) => {
  // res.json({ message: "register user successfull from controller" });
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;
    if (!fullName || !email || !password || !phone || !gender || !dob) {
      const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email Already Registred");
      error.statusCode = 409;
      return next(error);
    }
    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const photo = {
      url: photoUrl,
      publicId: null,
    };

    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });

    res.status(201).json({ message: "User created Successfully" });
  } catch (error) {
    console.log(error.message);
    next();
  }
};

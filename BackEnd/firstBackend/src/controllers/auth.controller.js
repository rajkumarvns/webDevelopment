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

    //Add Dummy Photo Placeholder

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0)}`;

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

    res.status(200).json({ message: "USer created Successfully" });
  } catch (error) {
    console.log({ message: "Something wrong it's catch error" });
  }
};

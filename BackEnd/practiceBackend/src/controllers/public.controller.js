export const contactUs = (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Please provide name, email, and message for contact us."
    });
  }

  res.status(201).json({
    message: "Thanks for contacting us. We will get back to you soon.",
    data: { name, email, message }
  });
};

export const aboutPage = (req, res) => {
  res.json({
    name: "Practice Backend Project",
    version: "1.0.0",
    description: "This API supports authentication and public information endpoints like contact-us and about.",
    author: "Your Backend Team"
  });
};
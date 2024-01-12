const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");
// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    Admin.create({
      username,
      password,
    });
    res.json({
      message: "Admin created successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;
  try {
    const course = await Course.create({
      title,
      description,
      price,
      imageLink,
    });
    res.json({message: `Course created successfully', courseId: ${course._id}`})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  try {
    const courses = await Course.find({});
    return res.json({courses: courses})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
});

module.exports = router;

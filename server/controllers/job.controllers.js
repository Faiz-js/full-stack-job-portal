const jobModel = require("../models/job.model.js");

const postJob = async (req, res) => {
  try {
    const {
      jobTitle,
      companyName,
      skills,
      workMode,
      minSalary,
      yearsOfExp,
      country,
      city,
      jobDesc,
    } = req.body;

    if (
      !jobTitle ||
      !companyName ||
      !skills ||
      !workMode ||
      !minSalary ||
      !yearsOfExp ||
      !country ||
      !city ||
      !jobDesc
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    await jobModel.insertPostJob(
      jobTitle,
      companyName,
      skills,
      workMode,
      minSalary,
      yearsOfExp,
      country,
      city,
      jobDesc,
    );

    return res
      .status(201)
      .json({ success: true, message: "Job created successfully!" });
  } catch (error) {
    console.log("❌ error in postJob function: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = { postJob };

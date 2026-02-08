const psql = require("../config/dbConnection");

const insertPostJob = async (
  jobTitle,
  companyName,
  skills,
  workMode,
  minSalary,
  yearsOfExp,
  country,
  city,
  jobDesc,
) => {
  try {
    const insertQuery = await psql.query(
      `INSERT INTO ${process.env.JOBS_TABLE} (
        job_title,
        company_name,
        skills,
        work_mode,
        min_salary,
        years_of_exp,
        country,
        city,
        job_description
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        jobTitle,
        companyName,
        skills,
        workMode,
        minSalary,
        yearsOfExp,
        country,
        city,
        jobDesc,
      ],
    );

    return insertQuery.rows[0];
  } catch (error) {
    console.error("❌ error in insert post job function: ", error);
    throw error;
  }
};

module.exports = { insertPostJob };

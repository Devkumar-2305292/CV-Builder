import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [savedPersonalDetails, setSavedPersonalDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault(); // stops page reload
    setSavedPersonalDetails(personalDetails); // saves the current form state
    localStorage.setItem("personalDetails", JSON.stringify(personalDetails));
  };

  //education
  const [education, setEducationDetails] = useState({
    universityName: "",
    degreeName: "",
  });

  const [savedEducationDetails, setSavedEducationDetails] = useState(null);

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setEducationDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave1 = (e) => {
    e.preventDefault();
    setSavedEducationDetails(education);
    localStorage.setItem("educationDetails", JSON.stringify(education));
  };

  //experience:
  const [experience, setExperienceDetails] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const [savedExperienceDetails, setSavedExperienceDetails] = useState(null);

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setExperienceDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave2 = (e) => {
    e.preventDefault();
    setSavedExperienceDetails(experience);
    localStorage.setItem("educationDetails", JSON.stringify(experience));
  };

  useEffect(() => {
    const storedPersonal = localStorage.getItem("personalDetails");
    const storedEducation = localStorage.getItem("educationDetails");
    const storedExperience = localStorage.getItem("experienceDetails");

    if (storedPersonal) {
      setSavedPersonalDetails(JSON.parse(storedPersonal));
      setPersonalDetails(JSON.parse(storedPersonal));
    }

    if (storedEducation) {
      setSavedEducationDetails(JSON.parse(storedEducation));
      setEducationDetails(JSON.parse(storedEducation));
    }

    if (storedExperience) {
      setSavedExperienceDetails(JSON.parse(storedExperience));
      setExperienceDetails(JSON.parse(storedExperience));
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="left">
          <div className="formContainer">
            <div className="personalDetails">
              <h1>Personal Details</h1>
              {/* bind form to state + onSubmit */}
              <form onSubmit={handleSave}>
                <label htmlFor="FullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Write your name here"
                  value={personalDetails.fullName}
                  onChange={handleChange}
                />

                <label htmlFor="Email"> Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Write your email here"
                  value={personalDetails.email}
                  onChange={handleChange}
                />

                <label htmlFor="Number">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your Phone Number"
                  value={personalDetails.phone}
                  onChange={handleChange}
                />

                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={personalDetails.address}
                  onChange={handleChange}
                />

                <div className="buttoncss">
                  <button className="save" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>

            {/* Education form (not connected yet) */}
            <div className="education">
              <h1>Education</h1>
              <form onSubmit={handleSave1}>
                <label htmlFor="university">University Name</label>
                <input
                  type="text"
                  name="universityName"
                  placeholder="Enter your university name here"
                  value={education.universityName}
                  onChange={handleChange1}
                />
                <label htmlFor="degreeName">Degree Name</label>
                <input
                  type="text"
                  name="degreeName"
                  placeholder="Enter name of degree"
                  value={education.degreeName}
                  onChange={handleChange1}
                />
                <div className="buttoncss">
                  <button className="save" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>

            {/* Experience form (not connected yet) */}
            <div className="experience">
              <h1>Experience</h1>
              <form onSubmit={handleSave2}>
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  name="companyName"
                  value={experience.companyName}
                  onChange={handleChange2}
                />
                <label htmlFor="positionTitle">Position Title</label>
                <input
                  type="text"
                  placeholder="Enter Position Title"
                  name="positionTitle"
                  value={experience.positionTitle}
                  onChange={handleChange2}
                />
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="text"
                  placeholder="Enter Start Date"
                  name="startDate"
                  value={experience.startDate}
                  onChange={handleChange2}
                />
                <label htmlFor="endDate">End Date</label>
                <input
                  type="text"
                  placeholder="Enter End Date"
                  name="endDate"
                  value={experience.endDate}
                  onChange={handleChange2}
                />
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  placeholder="Enter Location"
                  name="location"
                  value={experience.location}
                  onChange={handleChange2}
                />
                <label htmlFor="Description">Description</label>
                <textarea
                  id="desc"
                  placeholder="Enter Description"
                  type="text"
                  name="description"
                  value={experience.description}
                  onChange={handleChange2}
                ></textarea>
                <div className="buttoncss">
                  <button className="save" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Right column preview */}
        <div className="right">
          <div className="rightContainer">
            <div className="personalDetails1">
              <h1>Preview - Personal Details</h1>
              {savedPersonalDetails ? (
                <div>
                  <p>
                    <strong>Name:</strong> {savedPersonalDetails.fullName}
                  </p>
                  <p>
                    <strong>Email:</strong> {savedPersonalDetails.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {savedPersonalDetails.phone}
                  </p>
                  <p>
                    <strong>Address:</strong> {savedPersonalDetails.address}
                  </p>
                </div>
              ) : (
                <p>No details saved yet.</p>
              )}
            </div>

            <div className="education1">
              <h1>Education</h1>
              {savedEducationDetails ? (
                <div>
                  <p>
                    <strong>University:</strong>
                    {savedEducationDetails.universityName}
                  </p>
                  <p>
                    <strong>Degree:</strong> {savedEducationDetails.degreeName}
                  </p>
                </div>
              ) : (
                <p>No education details saved yet</p>
              )}
            </div>
            <div className="experience1">
              <h1>Experience</h1>
              {savedExperienceDetails ? (
                <div>
                  <p>
                    <strong>Company Name:</strong>
                    {savedExperienceDetails.companyName}
                  </p>
                  <p>
                    <strong>Position Title:</strong>
                    {savedExperienceDetails.positionTitle}
                  </p>
                  <p>
                    <strong>Start Date:</strong>
                    {savedExperienceDetails.startDate}
                  </p>
                  <p>
                    <strong>End Date:</strong>
                    {savedExperienceDetails.endDate}
                  </p>
                  <p>
                    <strong>Location:</strong>
                    {savedExperienceDetails.location}
                  </p>
                  <strong>Description</strong>
                  {savedExperienceDetails.description}
                </div>
              ) : (
                <p>No experience details saved yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

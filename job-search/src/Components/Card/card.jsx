import React, { useEffect, useState } from "react";
import "../Card/card.css";

function Card({
  apiJobDetails,
  apijobRole,
  apiLocation,
  apiMinExp,
  apiMinJdSalary,
  apiMaxJdSalary,
  apisalaryCurrencyCode,
}) {
  //  Company Name is Missing in the API so sample Company is Used

  const [aboutCompany, setAboutCompany] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [minExp, setMinExp] = useState("");
  const [minJdSalary, setMinJdSalary] = useState("");
  const [maxJdSalary, setMaxJdSalary] = useState("");
  const [currencyCode, setCurrencyCode] = useState("");

  const [isDescExpanded, setIsDescExpanded] = useState(false);

  useEffect(() => {
    setJobRole(apijobRole);
    setJobLocation(apiLocation);
    setMinExp(apiMinExp);
    setMinJdSalary(apiMinJdSalary);
    setMaxJdSalary(apiMaxJdSalary);
    setAboutCompany(apiJobDetails);
    setCurrencyCode(apisalaryCurrencyCode);
  }, []);
  const getFirstFewWords = (text) => {
    const words = text.split(/\s+/);
    return words.slice(0, 35).join(" ") + "...";
  };
  //Assumed That Salary is Either in USD or INR
  const salaryText =
    currencyCode === "USD"
      ? minJdSalary
        ? `Estimated Salary: ${minJdSalary}K -  ${maxJdSalary}K USD ✅ `
        : `Estimated Salary: Upto ${maxJdSalary}K USD ✅ `
      : minJdSalary
      ? `Estimated Salary: Rs${minJdSalary} -  ${maxJdSalary} Lakh ✅ `
      : `Estimated Salary: Upto Rs${maxJdSalary} Lakh ✅ `;

  return (
    <div className="parentDiv">
      <div className="postTimeLineContainer">⏳ Posted 13 days ago</div>
      <div className="imgAndRoleInfoContainer">
        <img
          src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713598325603_7ico7.jpg"
          alt="logo"
          style={{ width: "25px", height: "2.5rem" }}
        />
        <div>
          <h3 className="companyName">Sample Company</h3>
          <h2 className="jobRole">{jobRole}</h2>
          <p className="jobLocation">{jobLocation}</p>
        </div>
      </div>
      <div className="estimatedSalaryDiv">{salaryText}</div>
      <div>
        <p style={{ marginBottom: "0.2rem", marginTop: "0.3rem" }}>
          About Company:
        </p>
        <p style={{ margin: "0" }}>
          <strong>About us</strong>
        </p>
      </div>
      <p className="jobDescription">
        {isDescExpanded ? aboutCompany : getFirstFewWords(aboutCompany)}
      </p>
      <div style={{ display: "flex", justifyContent: "center", color: "blue" }}>
        <p
          className="ExpandButton"
          onClick={() => setIsDescExpanded(!isDescExpanded)}
        >
          {isDescExpanded ? "Hide" : "View Job Description"}
        </p>
      </div>
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <h3 className="companyName">Minimum Experience</h3>
        <p style={{ margin: "0" }}>
          {minExp ? `${minExp} Years` : `Not Mentioned`}
        </p>
        <div className="EasyApplyButton">⚡ Easy Apply</div>
      </div>
    </div>
  );
}

export default Card;

import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo from "../images/university logo.png";

const PdfGenerator = () => {
  const [formData, setFormData] = useState({
    department: "",
    othersDepartment: "",
    title: "",
    courseCode: "",
    courseTitle: "",
    experimentNo: "",
    experimentName: "",
    studentName: "",
    studentId: "",
    batch: "",
    semester: "",
    session: "",
    designation: "",
    otherDesignation: "",
    teacherName: "",
    teacherDepartment: "",
    customTeacherDepartment: "",
    dateOfExperiment: "",
    dateOfSubmission: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generatePDF = () => {
    const element = document.getElementById("report");
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Generated_Report.pdf");
    });
  };

  return (
    <div className="p-4">
      
      <div className="lg:flex">
        {/* Input Fields */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
            <input
              type="text"
              name="studentName"
              placeholder="Student Name"
              value={formData.studentName}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="studentId"
              placeholder="Student ID"
              value={formData.studentId}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="batch"
              placeholder="Batch"
              value={formData.batch}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="semester"
              placeholder="Semester"
              value={formData.semester}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="session"
              placeholder="Session"
              value={formData.session}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value=" ">Select Your Department</option>
              <option value="Computer Science & Engineering">
                Computer Science & Engineering
              </option>
              <option value="Electrical & Electronic Engineering">
                Electrical & Electronic Engineering
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Business Administration">
                Business Administration
              </option>
              <option value="Public Health">Public Health</option>
              <option value="Islamic Studies">Islamic Studies</option>
              <option value="English">English</option>
              <option value="Education">Education</option>
              <option value="Law">Law</option>
              <option value="Others">Others</option>
            </select>
            {formData.department === "Others" && (
              <input
                type="text"
                name="othersDepartment"
                placeholder="Specify Department"
                value={formData.othersDepartment}
                onChange={handleChange}
                className="p-2 border rounded"
              />
            )}

            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value=" ">Select Report type</option>
              <option value="Lab Report">Lab Report</option>
              <option value="Assignment">Assignment</option>
            </select>
            <input
              type="text"
              name="courseCode"
              placeholder="Course Code"
              value={formData.courseCode}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="courseTitle"
              placeholder="Course Title"
              value={formData.courseTitle}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="experimentNo"
              placeholder="Experiment No"
              value={formData.experimentNo}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="experimentName"
              placeholder="Experiment Name"
              value={formData.experimentName}
              onChange={handleChange}
              className="p-2 border rounded"
            />

            <input
              type="text"
              name="teacherName"
              placeholder="Teacher Name"
              value={formData.teacherName}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="">Select Designation</option>
              <option value="Lecturer">Lecturer</option>
              <option value="Asst. professor">Asst. professor</option>
              <option value="Others">Others</option>
            </select>
            {formData.designation === "Others" && (
              <input
                type="text"
                name="otherDesignation"
                placeholder="Specify Designation"
                value={formData.otherDesignation}
                onChange={handleChange}
                className="p-2 border rounded"
              />
            )}
            <select
              name="teacherDepartment"
              value={formData.teacherDepartment}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value=" ">Select Department</option>
              <option value="Computer Science & Engineering">
                Computer Science & Engineering
              </option>
              <option value="Electrical & Electronic Engineering">
                Electrical & Electronic Engineering
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Business Administration">
                Business Administration
              </option>
              <option value="Public Health">Public Health</option>
              <option value="Islamic Studies">Islamic Studies</option>
              <option value="English">English</option>
              <option value="Education">Education</option>
              <option value="Law">Law</option>
              <option value="Others">Others</option>
            </select>
            {formData.teacherDepartment === "Others" && (
              <input
                type="text"
                name="customTeacherDepartment"
                placeholder="Specify Department"
                value={formData.customTeacherDepartment}
                onChange={handleChange}
                className="p-2 border rounded"
              />
            )}

            <label htmlFor="dateOfExperiment" className="text-left">
              Date of Experiment:
            </label>
            <input
              type="date"
              name="dateOfExperiment"
              value={formData.dateOfExperiment}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <label htmlFor="dateOfSubmission" className="text-left">
              Date of Submission:
            </label>
            <input
              type="date"
              name="dateOfSubmission"
              value={formData.dateOfSubmission}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </div>
          <button
            onClick={generatePDF}
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded block mx-auto"
          >
            Generate PDF
          </button>
        </div>

        {/* PDF Template */}
        <div
          id="report"
          className="w-[595px] h-[842px] sm:p-4 border shadow-lg mx-auto mt-8 lg:mt-0 bg-white"
        >
          <h1 className="text-2xl font-bold text-center pt-10">
            Pundra University of Science & Technology
          </h1>
          <div className="flex flex-col justify-center items-center py-4">
            <img src={logo} className="w-32" alt="university logo" />
          </div>
          <h2 className="text-center  text-xl">
            Department of{" "}
            {formData.department === "Others"
              ? formData.othersDepartment
              : formData.department}
          </h2>
          <div className="flex flex-col justify-center items-center py-6">
            <h2 className="border-y-4 border-black w-48 text-center py-2">
              {formData.title}
            </h2>
          </div>
          <div className="text-left pl-10 py-4">
            <p>
              <span className="font-bold">Course Code:</span>{" "}
              {formData.courseCode}
            </p>
            <p>
              <span className="font-bold">Course Title:</span>{" "}
              {formData.courseTitle}
            </p>
            <p>
              <span className="font-bold">Experiment No:</span>{" "}
              {formData.experimentNo}
            </p>
            <p>
              <span className="font-bold">Experiment Name:</span>{" "}
              {formData.experimentName}
            </p>
          </div>

          <div className="flex justify-between mt-4 px-10">
            {/* Submitted by Section */}
            <div className="w-1/2">
              <p className="border-b-2 font-bold w-28">Submitted by:</p>
              <div className="pt-2 text-left">
                <p>Name: {formData.studentName}</p>
                <p>ID No: {formData.studentId}</p>
                <p>Batch: {formData.batch}</p>
                <p>Semester: {formData.semester}</p>
                <p>Session: {formData.session}</p>
              </div>
            </div>

            {/* Submitted to Section */}
            <div className="w-1/2 text-right">
              <p className="border-b-2 font-bold w-28 ml-auto">Submitted to:</p>
              <div className="pt-2">
                <p>{formData.teacherName}</p>
                <p>
                  {formData.designation === "Others"
                    ? formData.otherDesignation
                    : formData.designation}
                </p>
                <p>
                  Dept. of{" "}
                  {formData.teacherDepartment === "Others"
                    ? formData.customTeacherDepartment
                    : formData.teacherDepartment}
                  , PUB
                </p>
              </div>
            </div>
          </div>

          <div className="text-left pl-36 pt-8 pb-8">
            <p>
              <span className="font-bold">Date of Experiment:</span>{" "}
              {formData.dateOfExperiment}
            </p>
            <p>
              <span className="font-bold">Date of Submission:</span>{" "}
              {formData.dateOfSubmission}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfGenerator;

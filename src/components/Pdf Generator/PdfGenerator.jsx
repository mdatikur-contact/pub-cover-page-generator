import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo from "../images/university logo.png";

const PdfGenerator = () => {
  const [formData, setFormData] = useState({
    department: "",
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
    teacherName: "",
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
    <div className="p-4 ">
      <h1 className="text-2xl font-bold text-center mb-6">
        Cover Page Generator
      </h1>
      <div className="lg:flex">
        {/* input field */}
      <div className="lg:w-1/2">
        {/* Input Form */}
        <div className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="p-2 border rounded"
          >
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
            placeholder="experimen Name"
            value={formData.experimentName}
            onChange={handleChange}
            className="p-2 border rounded"
          />

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
          <input
            type="text"
            name="teacherName"
            placeholder="Teacher Name"
            value={formData.teacherName}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="date"
            name="dateOfExperiment"
            placeholder="Date of Experiment"
            value={formData.dateOfExperiment}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="date"
            name="dateOfSubmission"
            placeholder="Date of Submission"
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

      {/* Report Template */}
      <div
        id="report"
        className="w-[595px] h-[842] sm:p-4 border shadow-lg mx-auto mt-8 lg:mt-0 bg-white"
      >
        <h1 className="text-2xl font-bold text-center pt-10">
          Pundra University of Science & Technology
        </h1>
        {/* University Logo */}
        <div className="flex flex-col justify-center items-center py-8">
          <img src={logo} className="w-32" alt="university logo" />
        </div>
        <h2 className="text-center mt-4 text-xl">
          Department of {formData.department}
        </h2>
        <div className="flex flex-col justify-center items-center py-8">
          <h2 className="border-y-4 border-black w-48 text-center  py-2">
            {formData.title}
          </h2>
        </div>
        <p className="text-center">Course Code: {formData.courseCode}</p>
        <p className="text-center">Course Title: {formData.courseTitle}</p>
        <p className="text-center">Experiment No: {formData.experimentNo}</p>
        <p className="text-center">
          Experiment Name: {formData.experimentName}
        </p>
        <div className="flex justify-between mt-4">
          <div className="pl-10 w-96">
            <p className="border-b-2 font-bold w-28">Submitted by:</p>
            <div className="pl-4 text-left pt-4">
              <p>Name: {formData.studentName}</p>
              <p>ID No: {formData.studentId}</p>
              <p>Batch: {formData.batch}</p>
              <p>Semester: {formData.semester}</p>
              <p>Session: {formData.session}</p>
            </div>
          </div>
          <div className="pr-10 w-96">
            <p className="border-b-2 font-bold w-28">Submitted to:</p>
            <div className="pl-4 text-left pt-4">
              <p>{formData.teacherName}</p>
              <p>Lecturer</p>
              <p>Dept. of {formData.department}, PUB</p>
            </div>
          </div>
        </div>
        <div className="text-left pl-36 pt-0 pb-8">
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

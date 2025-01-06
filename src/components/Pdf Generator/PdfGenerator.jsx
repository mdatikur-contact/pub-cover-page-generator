import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";
import "@react-pdf-viewer/core/lib/styles/index.css";
import universityLogo from "../images/pub logo.jpg";

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 25,
  },
  logo: {
    width: 96,
    margin: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  text: {
    fontSize: 15,
    marginBottom: 8,
    marginLeft: 30,
    marginRight: 30,
  },

  bold: {
    fontWeight:900,
    fontStyle:900,
    fontSize: 16,
  },
  border: {
    borderBottom: 2,
    borderTop: 2,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  SubmittedBy: {
    marginBottom: 15,
    marginLeft: 30,
    fontSize: 20,
  },
  section: {
    marginBottom: 20,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    width: "48%",
  },
});

// PDF Template
const ReportTemplate = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Pundra University of Science & Technology
        </Text>
        <Image style={styles.logo} src={universityLogo} />
        <Text style={styles.subtitle}>
          Department of{" "}
          {formData.department === "Others"
            ? formData.othersDepartment
            : formData.department}
        </Text>
        <Text style={[styles.subtitle, styles.border]}>{formData.title}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>
          <Text style={styles.bold}>Course Code: </Text>{formData.courseCode}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Course Title: </Text>{formData.courseTitle}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Experiment No: </Text>{formData.experimentNo}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Experiment Name: </Text>{formData.experimentName}
        </Text>
      </View>

      <View style={[styles.row, styles.section]}>
        <View style={styles.column}>
          <Text style={styles.SubmittedBy}>
            <Text style={styles.bold}>Submitted by: </Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Name: </Text>{formData.studentName}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>ID No: </Text>{formData.studentId}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Batch: </Text>{formData.batch}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Semester: </Text>{formData.semester}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Session: </Text>{formData.session}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.SubmittedBy}>
            <Text style={styles.bold}>Submitted to: </Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Teacher: </Text>{formData.teacherName}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Designation: </Text>
            {formData.designation === "Others"
              ? formData.otherDesignation
              : formData.designation}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Dept. of </Text>
            {formData.teacherDepartment === "Others"
              ? formData.customTeacherDepartment
              : formData.teacherDepartment}
            , PUB
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>
          {formData.title === "Assignment" ? (
            ""
          ) : (
            <>
              <Text style={styles.bold}>Date of Experiment: </Text>
              {formData.dateOfExperiment}
            </>
          )}
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Date of Submission: </Text>
          {formData.dateOfSubmission}
        </Text>
      </View>
    </Page>
  </Document>
);


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

            {formData.title !== "Assignment" && (
              <>
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
              </>
            )}
            <>
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
            </>
          </div>
          {/* PDF Download Section */}
          <button className="mt-6 bg-indigo-400 font-bold text-white py-2 px-4 rounded block mx-auto">
            <PDFDownloadLink
              document={<ReportTemplate formData={formData} />}
              fileName={`${formData.experimentNo}. ${formData.experimentName}.pdf`}
            >
              {({ loading }) =>
                loading ? "Loading document..." : "Download PDF"
              }
            </PDFDownloadLink>
          </button>
        </div>
        {/* PDF Template */}
        <div className="lg:w-[595px] lg:h-[842px]  sm:p-4 border shadow-lg mx-auto mt-8 lg:mt-0 sm:px-4 bg-white">
          <h1 className="text-2xl font-bold text-center pt-10">
            Pundra University of Science & Technology
          </h1>
          <div className="flex flex-col justify-center items-center py-4">
            <img src={universityLogo} className="w-32" alt="university logo" />
          </div>
          <h2 className="text-center  text-xl">
            Department of{" "}
            {formData.department === "Others"
              ? formData.othersDepartment
              : formData.department}
          </h2>
          <div className="flex flex-col items-center py-6">
            <h2 className="border-y-4 border-black w-48 text-center pt-2 pb-4">
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
                <p><span className="font-bold">Name:</span> {formData.studentName}</p>
                <p><span className="font-bold">ID No:</span> {formData.studentId}</p>
                <p><span className="font-bold">Batch:</span> {formData.batch}</p>
                <p><span className="font-bold">Semester:</span> {formData.semester}</p>
                <p><span className="font-bold">Session:</span> {formData.session}</p>
              </div>
            </div>

            {/* Submitted to Section */}
            <div className="w-1/2 text-right">
              <p className="border-b-2 font-bold w-28 ml-auto">Submitted to:</p>
              <div className="pt-2">
                <p><span className="font-bold">Teacher:</span> {formData.teacherName}</p>
                <p>
                <span className="font-bold">Designation:</span>
                  {formData.designation === "Others"
                    ? formData.otherDesignation
                    : formData.designation}
                </p>
                <p>
                <span className="font-bold">Dept:{" "}</span>
                  {formData.teacherDepartment === "Others"
                    ? formData.customTeacherDepartment
                    : formData.teacherDepartment}
                  , PUB
                </p>
              </div>
            </div>
          </div>

          <div className="text-left pl-10 pt-8 pb-8">
            <p>
              {formData.title == "Assignment" ? (
                ""
              ) : (
                <>
                  <span className="font-bold">Date of Experiment:</span>{" "}
                  {formData.dateOfExperiment}
                </>
              )}
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

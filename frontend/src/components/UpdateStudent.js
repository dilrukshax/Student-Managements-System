import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    studentName: "",
    studentAge: "",
    studentEmail: "",
    studentPhone: "",
    studentAddress: "",
    studentDepartment: "",
    studentYear: "",
    studentSemester: "",
    studentGPA: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:8070/students/get/${id}`)
      .then((res) => {
        setStudent(res.data.student);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  const updateStudent = () => {
    axios.put(`http://localhost:8070/students/update/${id}`, student)
      .then(() => {
        alert("Student updated successfully");
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  return (
    <div className="container">
      <h1>Update Student</h1>
      <div className="row">
        <div className="row justify-content-center">
          <div className="col-md-6 ">
          <form className="container ">

            <div className="form-group">
              <label htmlFor="studentName" className="form-label">Student Name</label>
              <input
                type="text"
                className="form-control"
                id="studentName"
                name="studentName"
                value={student.studentName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentAge" className="form-label">Student Age</label>
              <input
                type="number"
                className="form-control"
                id="studentAge"
                name="studentAge"
                value={student.studentAge}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentEmail" className="form-label">Student Email</label>
              <input
                type="email"
                className="form-control"
                id="studentEmail"
                name="studentEmail"
                value={student.studentEmail}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentPhone" className="form-label">Student Phone</label>
              <input
                type="text"
                className="form-control"
                id="studentPhone"
                name="studentPhone"
                value={student.studentPhone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentAddress" className="form-label">Student Address</label>
              <input
                type="text"
                className="form-control"
                id="studentAddress"
                name="studentAddress"
                value={student.studentAddress}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentDepartment" className="form-label">Student Department</label>
              <input
                type="text"
                className="form-control"
                id="studentDepartment"
                name="studentDepartment"
                value={student.studentDepartment}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentYear" className="form-label">Student Year</label>
              <input
                type="text"
                className="form-control"
                id="studentYear"
                name="studentYear"
                value={student.studentYear}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentSemester" className="form-label">Student Semester</label>
              <input
                type="text"
                className="form-control"
                id="studentSemester"
                name="studentSemester"
                value={student.studentSemester}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentGPA" className="form-label">Student GPA</label>
              <input
                type="text"
                className="form-control"
                id="studentGPA"
                name="studentGPA"
                value={student.studentGPA}
                onChange={handleChange}
              />
            </div>

            <button type="button" className="btn btn-primary " onClick={updateStudent}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
    </div >
  );
}

export default UpdateStudent;

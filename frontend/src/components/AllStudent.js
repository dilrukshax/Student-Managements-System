import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllStudent() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    function getAllStudents() {
      axios.get("http://localhost:8070/students/").then((res) => {
        setStudentList(res.data);
      }).catch((err) => {
        alert(err.message);
      });
    }
    getAllStudents();
  }, []);

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:8070/students/delete/${id}`)
      .then(() => {
        alert("Student deleted successfully");
        setStudentList(studentList.filter(student => student._id !== id));
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <h1>All Student</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Student Age</th>
            <th scope="col">Student Email</th>
            <th scope="col">Student Phone</th>
            <th scope="col">Student Address</th>
            <th scope="col">Student Department</th>
            <th scope="col">Student Year</th>
            <th scope="col">Student Semester</th>
            <th scope="col">Student GPA</th>

          </tr>
        </thead>
        <tbody>
          {studentList.map((student, key) => {
            return (
              <tr key={key}>
                <td>{student.studentName}</td>
                <td>{student.studentAge}</td>
                <td>{student.studentEmail}</td>
                <td>{student.studentPhone}</td>
                <td>{student.studentAddress}</td>
                <td>{student.studentDepartment}</td>
                <td>{student.studentYear}</td>
                <td>{student.studentSemester}</td>
                <td>{student.studentGPA}</td>
                <td>
                  <Link to={`/update/${student._id}`}>
                    <button className="btn btn-warning mr-2 mb-3">Update</button>
                  </Link>
                </td>
                <td>

                  <button
                    className="btn btn-danger mr-2 mb-3"
                    onClick={() => deleteStudent(student._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllStudent;

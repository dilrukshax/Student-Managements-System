import React, { useState } from "react";
import axios from "axios";

function AddStudent() {

    const [studentName, setStudentName] = useState("");
    const [studentAge, setStudentAge] = useState("");
    const [studentEmail, setStudentEmail] = useState("");
    const [studentPhone, setStudentPhone] = useState("");
    const [studentAddress, setStudentAddress] = useState("");
    const [studentDepartment, setStudentDepartment] = useState("");
    const [studentYear, setStudentYear] = useState("");
    const [studentSemester, setStudentSemester] = useState("");
    const [studentGPA, setStudentGPA] = useState("");

    function addStudent(e) {
        e.preventDefault();

        const newStudent = {
            studentName,
            studentAge,
            studentEmail,
            studentPhone,
            studentAddress,
            studentDepartment,
            studentYear,
            studentSemester,
            studentGPA
        }

        console.log(newStudent);

        axios.post("http://localhost:8070/students/add", newStudent).then(() => {
            alert("Student Added");
            setStudentName("");
            setStudentAge("");
            setStudentEmail("");
            setStudentPhone("");
            setStudentAddress("");
            setStudentDepartment("");
            setStudentYear("");
            setStudentSemester("");
            setStudentGPA("");

        }).catch((err) => {
            alert(err);
        })
    }


    return (
        <div className="container container-width center">
            <div className="row">
                <div className="row justify-content-center">
                    <div className="col-md-6 ">

                        <form onSubmit={addStudent}>
                            <div className="mb-3">
                                <label htmlFor="studentName" className="form-label">Student Name</label>
                                <input type="text" className="form-control" id="studentName"
                                    onChange={(e) => {
                                        setStudentName(e.target.value);
                                    }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="studentAge" className="form-label">Student Age</label>
                                <input type="number" className="form-control" id="studentAge"
                                    onChange={(e) => {
                                        setStudentAge(e.target.value);
                                    }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="studentEmail" className="form-label">Student Email</label>
                                <input type="email" className="form-control" id="studentEmail"
                                    onChange={(e) => {
                                        setStudentEmail(e.target.value);
                                    }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="studentPhone" className="form-label">Student Phone</label>
                                <input type="tel" className="form-control" id="studentPhone"
                                    onChange={(e) => {
                                        setStudentPhone(e.target.value);
                                    }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="studentAddress" className="form-label">Student Address</label>
                                <input type="text" className="form-control" id="studentAddress"
                                    onChange={(e) => {
                                        setStudentAddress(e.target.value);
                                    }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="studentDepartment" className="form-label">Student Department</label>
                                <input type="text" className="form-control" id="studentDepartment"
                                    onChange={(e) => {
                                        setStudentDepartment(e.target.value);
                                    }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="studentYear" className="form-label">Student Year</label>
                                <input type="text" className="form-control" id="studentYear"
                                    onChange={(e) => {
                                        setStudentYear(e.target.value);
                                    }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="studentSemester" className="form-label">Student Semester</label>
                                <input type="text" className="form-control" id="studentSemester"
                                    onChange={(e) => {
                                        setStudentSemester(e.target.value);
                                    }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="studentGPA" className="form-label">Student GPA</label>
                                <input type="number" step="0.01" className="form-control" id="studentGPA"
                                    onChange={(e) => {
                                        setStudentGPA(e.target.value);
                                    }} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AddStudent;
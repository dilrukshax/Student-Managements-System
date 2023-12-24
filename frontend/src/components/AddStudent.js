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
        <div className="container">
            <form onSubmit={addStudent}>
                <div className="form-group">
                    <label for="studentName" className="form-label">student Name</label>
                    <input type="text" className="form-control" id="studentName" 
                    onChange={(e)=>{
                        setStudentName(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="studentAge" className="form-label">student Age</label>
                    <input type="number" className="form-control" id="studentAge" 
                    onChange={(e)=>{
                        setStudentAge(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="studentEmail" className="form-label">student Email</label>
                    <input type="email" className="form-control" id="studentEmail" 
                    onChange={(e)=>{
                        setStudentEmail(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="studentPhone" className="form-label">studentPhone</label>
                    <input type="number" className="form-control" id="studentPhone" 
                    onChange={(e)=>{
                        setStudentPhone(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="studentAddress" className="form-label">studentAddress</label>
                    <input type="text" className="form-control" id="studentAddress" 
                    onChange={(e)=>{
                        setStudentAddress(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="studentDepartment" className="form-label">studentDepartment</label>
                    <input type="text" className="form-control" id="studentDepartment" 
                    onChange={(e)=>{
                        setStudentDepartment(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="studentYear" className="form-label">studentYear</label>
                    <input type="text" className="form-control" id="studentYear" 
                    onChange={(e)=>{
                        setStudentYear(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="studentSemester" className="form-label">studentSemester</label>
                    <input type="text" className="form-control" id="studentSemester" 
                    onChange={(e)=>{
                        setStudentSemester(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="studentGPA" className="form-label">studentGPA</label>
                    <input type="number" className="form-control" id="studentGPA" 
                    onChange={(e)=>{
                        setStudentGPA(e.target.value);
                    }}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default AddStudent;
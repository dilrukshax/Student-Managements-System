// import React from "react";

// function UpdateStudent() {

//     const [studentName, setStudentName] = useState("");
//     const [studentAge, setStudentAge] = useState("");
//     const [studentEmail, setStudentEmail] = useState("");
//     const [studentPhone, setStudentPhone] = useState("");
//     const [studentAddress, setStudentAddress] = useState("");
//     const [studentDepartment, setStudentDepartment] = useState("");
//     const [studentYear, setStudentYear] = useState("");
//     const [studentSemester, setStudentSemester] = useState("");
//     const [studentGPA, setStudentGPA] = useState("");

//     const updateStudent = () => {
//         const newStudent = {
//             studentName,
//             studentAge,
//             studentEmail,
//             studentPhone,
//             studentAddress,
//             studentDepartment,
//             studentYear,
//             studentSemester,
//             studentGPA
//         }

//         axios.put("http://localhost:8070/students/update/" + props.match.params.id, newStudent).then(() => {
//             alert("Student Updated");
//             history.push("/all");
//         }).catch((err) => {
//             alert(err);
//         })
//     }

//     return (
//         <div>
//             <h1>Update Student</h1>
//             <form className="row g-3">
//                 <div className="col-md-6">
//                     <label htmlFor="studentName" className="form-label">Student Name</label>
//                     <input type="text" className="form-control" id="studentName" placeholder="Enter Student Name" onChange={(e) => {
//                         setStudentName(e.target.value);
//                     }} />
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="studentAge" className="form-label">Student Age</label>
//                     <input type="text" className="form-control" id="studentAge" placeholder="Enter Student Age" onChange={(e) => {
//                         setStudentAge(e.target.value);
//                     }} />
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="studentEmail" className="form-label">Student Email</label>
//                     <input type="text" className="form-control" id="studentEmail" placeholder="Enter Student Email" onChange={(e) => {
//                         setStudentEmail(e.target.value);
//                     }} />
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="studentPhone" className="form-label">Student Phone</label>
//                     <input type="text" className="form-control" id="studentPhone" placeholder="Enter Student Phone" onChange={(e) => {
//                         setStudentPhone(e.target.value);
//                     }} />
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="studentAddress" className="form-label">Student Address</label>
//                     <input type="text" className="form-control" id="studentAddress" placeholder="Enter Student Address" onChange={(e) => {
//                         setStudentAddress(e.target.value);
//                     }} />
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="studentDepartment" className="form-label">Student Department</label>
//                     <input type="text" className="form-control" id="studentDepartment" placeholder="Enter Student Department" onChange={(e) => {
//                         setStudentDepartment(e.target.value);
//                     }} />
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="studentYear" className="form-label">Student Year</label>
//                     <input type="text" className="form-control" id="studentYear" placeholder="Enter Student Year" onChange={(e) => {
//                         setStudentYear(e.target.value);
//                     }} />
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default UpdateStudent;
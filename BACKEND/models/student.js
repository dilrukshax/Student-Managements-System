const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    studentName: {
        type: String,
        required: true
    },
    studentAge : {
        type: Number,
        required: true
    },
    studentEmail: {
        type: String,
        required: true
    },
    studentPhone: {
        type: Number,
        required: true
    },
    studentAddress: {
        type: String,
        required: true
    },
    studentDepartment: {
        type: String,
        required: true
    },
    studentYear: {
        type: String,
        required: true
    },
    studentSemester: {
        type: String,
        required: true
    },
    studentGPA: {
        type: Number,
        required: true
    },
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
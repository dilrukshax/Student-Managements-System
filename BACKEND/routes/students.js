const router = require('express').Router();
let Student = require('../models/student.js');

router.route('/add').post((req, res) => {
    const studentName = req.body.studentName;
    const studentAge = Number(req.body.studentAge);
    const studentEmail = req.body.studentEmail;
    const studentPhone = Number(req.body.studentPhone);
    const studentAddress = req.body.studentAddress;
    const studentDepartment = req.body.studentDepartment;
    const studentYear = req.body.studentYear;
    const studentSemester = req.body.studentSemester;
    const studentGPA = Number(req.body.studentGPA);

    const newStudent = new Student({
        studentName,
        studentAge,
        studentEmail,
        studentPhone,
        studentAddress,
        studentDepartment,
        studentYear,
        studentSemester,
        studentGPA
    });

    newStudent.save().then(() => {
        res.json("Student Added");
    }).catch((err) => {
        console.log(err);
    });
});

router.route('/').get((req, res) => {
    Student.find().then((students) => {
        res.json(students);
    }).catch((err) => {
        console.log(err);
    });
});

router.route('/update/:id').put(async (req, res) => {
    let userId = req.params.id;
    const {studentName, studentAge, studentEmail, studentPhone, studentAddress, studentDepartment, studentYear, studentSemester, studentGPA} = req.body;

    const updateStudent = {
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

    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(() => {
        res.status(200).send({status: "User Updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
});

router.route('/delete/:id').delete(async (req, res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "User Deleted"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with deleting data" , error: err.message});
    })
});

router.route('/get/:id').get(async (req, res) => {
    let userId = req.params.id;

    const user = await Student.findById(userId).then((student) => {
        res.status(200).send({status: "User fetched" , student});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with getting data", error: err.message});
    })
});



module.exports = router;
// assuming Student and WorksnapsTimeEntry are mongoose model

async function showStudentTimeEntries({ Student, WorksnapsTimeEntry }) {
  const students = await Student.find();
  students.forEach(async (student) => {
    const worksnapsTimeEntry = await WorksnapsTimeEntry.find({
      student: student._id,
    });
    const timeEntry = worksnapsTimeEntry.timeEntries;
    console.log(student.firstName + " " + student.lastName + " : ", {
      timeEntry,
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
    const studentDetailsContainer = document.getElementById('studentDetailsContainer');

    function fetchStudentDetails() {
        const studentIdInput = document.getElementById('studentIdInput');
        const studentId = studentIdInput.value;

        // Fetch student details by ID
        fetch(`http://localhost:8080/Students/${studentId}`)
            .then(response => response.json())
            .then(student => {
                if (student) {
                    // Display student details
                    const detailsHtml = `
                        <p>ID: ${student.studentID}</p>
                        <p>First Name: ${student.firstname}</p>
                        <p>Last Name: ${student.lastname}</p>
                        <p>Email: ${student.email}</p>
                    `;
                    studentDetailsContainer.innerHTML = detailsHtml;
                } else {
                    // Display message if student not found
                    studentDetailsContainer.innerHTML = '<p>Student not found</p>';
                }
            })
            .catch(error => console.error('Error fetching student details:', error));
    }

    function fetchCourseDetails() {
        const courseIdInput = document.getElementById('courseIdInput');
        const courseId = courseIdInput.value;

        // Fetch student details by ID
        fetch(`http://localhost:8080/Courses/${courseId}`)
            .then(response => response.json())
            .then(course => {
                if (course) {
                    // Display student details
                    const detailsHtml = `
                        <p>ID: ${course.courseID}</p>
                        <p>First Name: ${course.name}</p>
                        <p>Last Name: ${course.teacher}</p>
                    `;
                    document.getElementById('courseDetailsContainer').innerHTML = detailsHtml;
                } else {
                    // Display message if student not found
                    document.getElementById('courseDetailsContainer').innerHTML = '<p>Course not found</p>';
                }
            })
            .catch(error => console.error('Error fetching course details:', error));
    }

    // Attach the fetchStudentDetails function to the button click event
    document.querySelector('#studentIdButton').addEventListener('click', fetchStudentDetails);
    document.querySelector('#courseIdButton').addEventListener('click', fetchCourseDetails);
});

function addCourse() {
    const courseId = document.getElementById('newCourseId').value;
    const courseName = document.getElementById('newCoursename').value;
    const courseTeacher = document.getElementById('newCourseTeacher').value;

    // Validate that all fields are filled
    if (!courseId || !courseName || !courseTeacher) {
        alert('Please fill all textboxes to add a new course.');
        return;
    }

    // Send a request to add the course to the server
    fetch('http://localhost:8080/addCourses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            courseID: courseId,
            name: courseName,
            teacher: courseTeacher,
        }),
    })
    .then(response => {
        if (response.ok) {
            console.log('Course added successfully.');
        } else {
            console.log('Failed to add course. Please try again.');
        }
    })
    .catch(error => console.error('Error adding course:', error));
}

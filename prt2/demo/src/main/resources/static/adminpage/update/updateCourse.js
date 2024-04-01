function updateCourse() {
    const courseId = document.getElementById('newCourseId').value;
    const courseName = document.getElementById('newCoursename').value;
    const courseTeacher = document.getElementById('newCourseTeacher').value;

    // Validate that course ID is filled
    if (!courseId) {
        alert('Please fill the Course ID to update a course.');
        return;
    }

    // Send a request to update the course to the server
    fetch(`http://localhost:8080/updateCourses/${courseId}`, {
        method: 'PUT',
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
            console.log('Course updated successfully.');
        } else {
            console.log('Failed to update course. Please try again.');
        }
    })
    .catch(error => console.error('Error updating course:', error));
}

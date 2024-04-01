function deleteCourse() {
    const courseId = document.getElementById('newCourseId').value;

    // Validate that course ID is filled
    if (!courseId) {
        alert('Please fill the Course ID to delete a course.');
        return;
    }

    // Send a request to delete the course to the server
    fetch(`http://localhost:8080/deleteCourses/${courseId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            console.log('Course deleted successfully.');
        } else {
            console.log('Failed to delete course. Please try again.');
        }
    })
    .catch(error => console.error('Error deleting course:', error));
}

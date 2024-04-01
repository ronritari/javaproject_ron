function deleteStudent() {
    const studentId = document.getElementById('newStudentId').value;

    // Validate that course ID is filled
    if (!studentId) {
        alert('Please fill the student ID to delete a student.');
        return;
    }

    // Make a request to your Spring Boot backend to delete the student by ID
    fetch(`http://localhost:8080/deleteStudents/${studentId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            console.log('Student deleted successfully');

        } else {
            console.log('Failed to delete student');
        }
    })
    .catch(error => console.error('Error during request:', error));
}

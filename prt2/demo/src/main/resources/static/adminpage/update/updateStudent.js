function updateStudent() {
    const studentId = document.getElementById('newStudentId').value;
    const firstname = document.getElementById('newStudentFirstname').value;
    const lastname = document.getElementById('newStudentLastname').value;
    const email = document.getElementById('newStudentEmail').value;

    const studentData = {
        firstname: firstname,
        lastname: lastname,
        email: email
    };

    // Make a request to your Spring Boot backend to update the student by ID
    fetch(`http://localhost:8080/Students/${studentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
    })
    .then(response => {
        if (response.ok) {
            console.log('Student updated successfully');
            // You can add more logic here, e.g., refresh the student list
        } else {
            console.log('Failed to update student');
        }
    })
    .catch(error => console.error('Error during request:', error));
}

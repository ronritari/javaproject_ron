document.addEventListener('DOMContentLoaded', function () {
    const addStudentButton = document.getElementById('addStudentButton');

    addStudentButton.addEventListener('click', function () {
        const newStudentId = document.getElementById('newStudentId').value;
        const newStudentFirstname = document.getElementById('newStudentFirstname').value;
        const newStudentLastname = document.getElementById('newStudentLastname').value;
        const newStudentEmail = document.getElementById('newStudentEmail').value;

        // Check that none of the textboxes are null or empty
        if (!newStudentId || !newStudentFirstname || !newStudentLastname || !newStudentEmail) {
            console.error('Please fill in all fields.');
            return;
        }

        const newStudent = {
            studentID: newStudentId,
            firstname: newStudentFirstname,
            lastname: newStudentLastname,
            email: newStudentEmail
        };

        // Use fetch or any other AJAX library to send the newStudent to the server
        fetch('http://localhost:8080/addStudents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStudent),
        })
        .then(response => {
            if (response.ok) {
                console.log('Student added successfully!');
            } else {
                console.error('Failed to add student:', response.statusText);
            }
        })
        .catch(error => console.error('Error during adding student:', error));
    });
});

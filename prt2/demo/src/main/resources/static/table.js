document.addEventListener('DOMContentLoaded', function () {
    const studentContainer = document.getElementById('studentContainer');
    const coursesContainer = document.getElementById('coursesContainer');

    // Fetch Students data
    fetch('http://localhost:8080/Students')
        .then(response => response.json())
        .then(data => {
            const studentTable = createTable(['Student ID', 'Firstname', 'Lastname', 'Email'], data);
            studentContainer.appendChild(studentTable);
        })
        .catch(error => console.error('Error fetching Students data:', error));

    // Fetch Courses data
    fetch('http://localhost:8080/Courses')
        .then(response => response.json())
        .then(data => {
            const courseTable = createTable(['Course ID', 'Name', 'Teacher'], data);
            coursesContainer.appendChild(courseTable);
        })
        .catch(error => console.error('Error fetching Courses data:', error));

    // Function to create a table
    function createTable(headers, rowData) {
        const table = document.createElement('table');
        table.border = '1';

        // Create table header
        const headerRow = table.insertRow();
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        // Populate table with data
        rowData.forEach(item => {
            const row = table.insertRow();
            const cellProps = Object.keys(item);
            cellProps.forEach(prop => {
                const cell = row.insertCell();
                cell.textContent = item[prop];
            });
        });

        return table;
    }
});

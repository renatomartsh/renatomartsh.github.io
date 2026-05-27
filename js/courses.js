fetch('../courses.json')
    .then(response => response.json())
    .then(data => {

        const table = document.getElementById('coursesTable');

        data.forEach(course => {

            const row = `
                <tr>
                    <td>${course.name}</td>
                    <td>${course.platform}</td>
                    <td>${course.year}</td>
                </tr>
            `;

            table.innerHTML += row;
        });

    });
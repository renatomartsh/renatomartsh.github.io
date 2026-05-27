fetch('courses.json')
    .then(response => response.json())
    .then(data => {

        const table = document.getElementById('coursesTable');

        data.forEach(course => {

            table.innerHTML += `
                <tr>
                    <td>${course.name}</td>
                    <td>${course.platform}</td>
                    <td>${course.ano}</td>
                </tr>
            `;
        });

    })
    .catch(error => {
        console.log(error);
    });
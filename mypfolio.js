// Replace with your JSON file URL
    const jsonURL = "https://llacuna750.github.io/students.json"; // Correct file name

    fetch(jsonURL, { mode: "cors" })
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            let studentList = document.getElementById("student-list");

            // Check if JSON contains 'students' array
            if (data.students && Array.isArray(data.students)) {
                data.students.forEach(student => {
                    let listItem = document.createElement("li");
                    listItem.textContent = `${student.name} - ${student.age} (Course: ${student.course})`;
                    studentList.appendChild(listItem);
                });
            } else {
                console.error("Expected 'students' array but got:", data);
            }
        })
    .catch(error => console.error("Error fetching JSON:", error));
   

// JavaScript for hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        const spans = hamburger.querySelectorAll('span');
        
        // Animate hamburger to X
        if (nav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking on a menu item
    const menuItems = nav.querySelectorAll('li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            nav.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
});
   



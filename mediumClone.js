function setActive(clickedElement, sectionId) {
    // Remove active class from all navbar items
    document.querySelectorAll('.navbar a').forEach(item => item.classList.remove('active'));
    // Add active class to clicked item
    clickedElement.classList.add('active');

    // Hide all content sections
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));

    // Show the selected content
    document.getElementById(sectionId).classList.add('active');
}

//Working

// How it Works in JavaScript (setActive function)
// Step 1: It removes the active class from all navbar links.

// Step 2: It adds the active class to the clicked link, making it visually highlighted.

// Step 3: It hides all content sections by removing active.

// Step 4: It adds active to the selected section, making it visible.
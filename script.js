// JavaScript Functionality
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
    document.getElementById(sectionId).style.display = 'block'; // Show selected section
}

// Show home section by default
document.addEventListener("DOMContentLoaded", function() {
    showSection('home');
});

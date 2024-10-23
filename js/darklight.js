
// Get the toggle button
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('.card').classList.add('dark-mode');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.card').classList.toggle('dark-mode');
    
    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = 'Light Mode'; // Update button text
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = 'Dark Mode'; // Update button text
    }
});
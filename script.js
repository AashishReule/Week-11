// Select the button element
const toggleButton = document.querySelector('#darkModeToggle');

// Initial log to console
console.log('Portfolio script loaded successfully.');
console.log('Good morning, Aashish!');

// Add a click event listener to the button
toggleButton.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');
    
    // Check if dark mode is now active
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Log status to the console for debugging
    if (isDarkMode) {
        console.log('Dark Mode: Activated');
    } else {
        console.log('Dark Mode: Deactivated');
    }
    
    // Additional log to show the current class list
    console.log('Current body classes:', document.body.classList.value);
});

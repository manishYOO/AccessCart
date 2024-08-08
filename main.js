document.addEventListener('DOMContentLoaded', () => {
    // Fetch username from localStorage
    const username = localStorage.getItem('username') || 'User Name';
    document.getElementById('username').textContent = username;

    // Handle button clicks
    document.getElementById('borrow-btn').addEventListener('click', () => {
        // Redirect to borrow page
        window.location.href = 'borrow.html';
    });

    document.getElementById('lend-btn').addEventListener('click', () => {
        // Redirect to lend page
        window.location.href = 'lend.html';
    });

    // Handle profile icon click to toggle options
    const profileIcon = document.getElementById('profile-icon');
    const profileOptions = document.getElementById('profile-options');

    profileIcon.addEventListener('click', () => {
        profileOptions.style.display = profileOptions.style.display === 'flex' ? 'none' : 'flex';
    });

    window.addEventListener('click', (event) => {
        if (!event.target.matches('#profile-icon') && !event.target.closest('.profile-options')) {
            profileOptions.style.display = 'none';
        }
    });

    
});

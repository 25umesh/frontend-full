document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();

  const profileLink = document.getElementById('profileLink');
  const profileDropdown = document.getElementById('profileDropdown');
  const sidebar = document.querySelector('.sidebar');
  const sidebarToggler = document.querySelector('.sidebar-toggler');
  const addUrlBtn = document.getElementById('addUrlBtn'); // ✅ Plus button
  const searchBar = document.getElementById('searchBar'); // Search input

  // Toggle profile dropdown
  profileLink.addEventListener('click', (e) => {
    e.preventDefault();
    profileDropdown.classList.toggle('hidden');
  });

  // Populate user info
  const userInfo = {
    username: 'JohnDoe',
    email: 'johndoe@example.com'
  };
  document.getElementById('username').value = userInfo.username;
  document.getElementById('email').value = userInfo.email;

  // Toggle sidebar width
  sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('w-64');
    sidebar.classList.toggle('w-20');

    // Toggle chevron direction
    const icon = sidebarToggler.querySelector('.material-symbols-rounded');
    icon.textContent = sidebar.classList.contains('w-64') ? 'chevron_right' : 'chevron_left';
  });

  // ✅ Plus icon functionality: Add a new URL input to search bar (above it)
  addUrlBtn.addEventListener('click', () => {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'Enter VS Code URL...';
    newInput.className = 'w-full mb-2 bg-white border border-gray-300 rounded-md px-3 py-1 text-sm shadow focus:outline-none focus:ring-2 focus:ring-blue-500';

    // Insert it above the existing search bar
    searchBar.parentElement.insertBefore(newInput, searchBar);
  });
});

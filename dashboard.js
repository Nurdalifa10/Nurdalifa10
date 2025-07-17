    const toggleBtn = document.getElementById('toggleSidebar');
    const wrapper = document.getElementById('wrapper');

    toggleBtn.addEventListener('click', () => {
      wrapper.classList.toggle('toggled');
    });

document.getElementById("logoutbtn").addEventListener("click", function (e) {
  e.preventDefault();
  sessionStorage.clear(); // Hapus status login
  window.location.href = "index.html"; // Arahkan ke login
});


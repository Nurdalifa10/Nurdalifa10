document.getElementById("loginbtn").addEventListener("click", function () {
    const usernameInput = document.querySelector('input[placeholder="Username"]').value;
    const passwordInput = document.querySelector('input[placeholder="Password"]').value;

    fetch('users.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Gagal memuat data pengguna");
            }
            return response.json();
        })
        .then(data => {
            const user = data.users.find(
                u => u.username === usernameInput && u.password === passwordInput
            );

            if (user) {
                window.location.href = "dashboard.html";
            } else {
                alert("Username atau password salah!");
            }
        })
        .catch(error => {
            console.error("Terjadi kesalahan:", error);
            alert("Gagal mengautentikasi.");
        });
});

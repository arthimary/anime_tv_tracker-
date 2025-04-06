// Check if user is logged in
if (!localStorage.getItem("user_id")) {
    alert("You are not logged in!");
    window.location.href = "login.html"; // Redirect to login
}

// Logout function
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("logoutBtn").addEventListener("click", function () {
        fetch("logout.php", { method: "POST" })
            .then(() => {
                localStorage.removeItem("user_id");
                window.location.href = "login.html"; // Redirect to login page
            });
    });

    // Function to fetch and display shows
    function loadShows() {
        fetch("get_shows.php") // Ensure this backend file exists
            .then(response => response.json())
            .then(data => {
                const showGrid = document.getElementById("show-grid");
                showGrid.innerHTML = ""; // Clear previous content
                data.forEach(show => {
                    const div = document.createElement("div");
                    div.innerHTML = `<h3>${show.title}</h3><p>${show.description}</p>`;
                    showGrid.appendChild(div);
                });
            })
            .catch(error => console.error("Error fetching shows:", error));
    }

    // Load shows when page loads
    loadShows();
});
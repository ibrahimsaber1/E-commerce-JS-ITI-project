document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the user info is in local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.username === username && user.password === password) {
        // Redirect to index.html if credentials match
        window.location.href = "index.html";
      } else {
        alert("Invalid username or password");
      }
    } else {
      // Redirect to register.html if no user info found
      alert("No user found, redirecting to registration");
      window.location.href = "register.html";
    }
  });
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Simple static example — NOT SECURE
  if (email === "staff@klevs.studio" && password === "password123") {
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting…";

    // Simulate redirect
    setTimeout(() => {
      window.location.href = "staff-dashboard.html";
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid email or password.";
  }
});

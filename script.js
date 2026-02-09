// Default Owner account
const defaultStaff = {
  email: "add.login@klev.studio",
  password: "5Z^9^^Z@XSHkplUFc2dHQZ*7V7",
  rank: "Ownership"
};

// Initialize staff list
if (!localStorage.getItem("staff")) {
  localStorage.setItem("staff", JSON.stringify([defaultStaff]));
}

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  const staff = JSON.parse(localStorage.getItem("staff"));

  const user = staff.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("rank", user.rank);
    window.location.href = "panel.html";
  } else {
    msg.textContent = "Invalid login";
  }
}

// ADD STAFF
function addStaff() {
  const email = document.getElementById("newEmail").value;
  const password = document.getElementById("newPassword").value;
  const rank = document.getElementById("rank").value;
  const status = document.getElementById("status");

  let staff = JSON.parse(localStorage.getItem("staff"));

  staff.push({ email, password, rank });
  localStorage.setItem("staff", JSON.stringify(staff));

  status.textContent = `Staff added as ${rank}`;
}

// LOGOUT
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

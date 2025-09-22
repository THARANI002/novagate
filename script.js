// ========================
// Toggle Password Visibility
// ========================
document.querySelectorAll(".toggle-password").forEach(button => {
  button.addEventListener("click", () => {
    const input = button.previousElementSibling;
    input.type = input.type === "password" ? "text" : "password";
  });
});

// ========================
// Switch Between Forms
// ========================
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

document.getElementById("showRegister").addEventListener("click", () => {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

document.getElementById("showLogin").addEventListener("click", () => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});

// ========================
// Neon Cursor Effect
// ========================
const neonCursor = document.getElementById("neon-cursor");
const cursorDot = document.getElementById("cursor-dot");

document.addEventListener("mousemove", e => {
  neonCursor.style.left = `${e.clientX}px`;
  neonCursor.style.top = `${e.clientY}px`;
  cursorDot.style.left = `${e.clientX}px`;
  cursorDot.style.top = `${e.clientY}px`;
});

// ========================
// Basic Form Validation
// ========================
document.getElementById("registration").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let isValid = true;

  // Username validation
  if (username.length < 3) {
    document.getElementById("usernameError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("usernameError").style.display = "none";
  }

  // Email validation
  if (!email.includes("@")) {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("emailError").style.display = "none";
  }

  // Password validation
  const symbolCheck = /[!@#$%^&*(),.?":{}|<>]/;
  if (password.length < 8 || !symbolCheck.test(password)) {
    document.getElementById("passwordError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("passwordError").style.display = "none";
  }

  // Confirm password
  if (password !== confirmPassword) {
    document.getElementById("confirmError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("confirmError").style.display = "none";
  }

  if (isValid) {
    alert("✅ Registration successful!");
    this.reset();
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  }
});

document.getElementById("login").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!email.includes("@")) {
    document.getElementById("loginEmailError").style.display = "block";
    return;
  } else {
    document.getElementById("loginEmailError").style.display = "none";
  }

  if (password === "") {
    document.getElementById("loginPasswordError").style.display = "block";
    return;
  } else {
    document.getElementById("loginPasswordError").style.display = "none";
  }

  alert("✅ Login successful!");
  this.reset();
});

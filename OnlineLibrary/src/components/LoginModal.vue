<template>
  <!-- Modal overlay to cover the entire screen -->
  <div class="modal-overlay">
    <!-- Main login modal container -->
    <div class="login-modal">
      <!-- Close Button (top-right corner) -->
      <button class="close-button" @click="closeModal">✖</button>

      <!-- Logo of the app -->
      <img src="../assets/logo.png" alt="Logo" class="logo" />

      <!-- Modal title -->
      <h2>Welcome Back</h2>

      <!-- Username input field -->
      <input
        type="text"
        placeholder="Username"
        v-model="username"
        class="input"
      />

      <!-- Password input field with toggle visibility -->
      <div class="password-wrapper">
        <input
          :type="showPassword ? 'text' : 'password'"  <!-- Toggle password visibility -->
          placeholder="Password"
          v-model="password"
          class="input"
        />
        <!-- Icon/area to toggle password visibility -->
        <span class="toggle-password" @click="showPassword = !showPassword">
        </span>
      </div>

      <!-- Forgot password link -->
      <span class="forgot-password" @click="forgotPassword">
        FORGOT PASSWORD
      </span>

      <!-- Login button -->
      <button class="login-button" @click="login">Login</button>

      <!-- Divider text -->
      <div class="divider">Or register with</div>

      <!-- Social login buttons -->
      <div class="social-buttons">
        <button class="google-button" @click="redirectToGoogle">
          <img src="../assets/google.png" alt="Google" />
          Google
        </button>
        <button class="apple-button" @click="redirectToApple">
          <img src="../assets/apple.png" alt="Apple" />
          Apple
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importing ref from Vue
import { ref } from "vue";

// Reactive variables
const username = ref("");
const password = ref("");
const showPassword = ref(false);

// Login function to authenticate user
const login = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message); // Success message
    } else {
      alert(result.message); // Error message
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("An error occurred while logging in.");
  }
};

// Function to close the modal
const closeModal = () => {
  alert("Closing modal...");
};

// Triggered when user clicks "Forgot Password"
const forgotPassword = () => {
  alert("Forgot Password clicked");
};

// Redirects to Google login (placeholder)
const redirectToGoogle = () => {
  window.location.href = "https://www.google.com/";
};

// Redirects to Apple login (placeholder)
const redirectToApple = () => {
  window.location.href = "https://www.apple.com/";
};
</script>

<style scoped>
/* Full-screen overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #d1c4e9;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Modal box styles */
.login-modal {
  width: 400px;
  padding: 30px;
  border-radius: 20px;
  background: linear-gradient(180deg, #d1c4e9, #e8eaf6);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center;
}

/* Logo image positioning */
.logo {
  position: absolute;
  top: 25px;
  left: 30px;
  width: 80px;
}

/* Close button styling */
.close-button {
  position: absolute;
  top: 20px;
  right: 25px;
  border: none;
  font-size: 15px;
  cursor: pointer;
  border-radius: 300px;
  background-color: #6a1b9a;
}

.close-button:hover {
  background-color: #4a0e6f;
  transition: background-color 0.3s ease;
}

/* Title styling */
h2 {
  margin-top: 60px;
  font-weight: 700;
  color: #1e1e1e;
}

/* Input field styling */
.input {
  width: 90%;
  margin: 10px 0;
  padding: 10px 14px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
}

/* Password field wrapper */
.password-wrapper {
  position: relative;
}

/* Password toggle button position */
.toggle-password {
  position: absolute;
  top: 12px;
  right: 15px;
  cursor: pointer;
  font-size: 16px;
}

/* Forgot password link */
.forgot-password {
  color: #000000;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  margin: 10px 0;
  display: inline-block;
  transition: color 0.3s ease;
}

.forgot-password:hover {
  color: #6a1b9a;
}

/* Login button styles */
.login-button {
  width: 100%;
  padding: 10px 0;
  background-color: #6a1b9a;
  color: white;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #4a1260;
}

/* Divider styling */
.divider {
  margin: 20px 10px;
  font-size: 14px;
  color: #666;
  position: relative;
}

/* Divider horizontal lines */
.divider::before,
.divider::after {
  content: "";
  height: 1px;
  background: #ccc;
  position: absolute;
  top: 50%;
  width: 35%;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

/* Social button container */
.social-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

/* Shared styles for social buttons */
.google-button,
.apple-button {
  width: 48%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
}

/* Google button styles */
.google-button {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #ccc;
}

.google-button:hover {
  background-color: #d1c4e9;
}

/* Apple button styles */
.apple-button {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000;
}

.apple-button:hover {
  background-color: #d1c4e9;
}

/* Icon sizes inside social buttons */
.google-button img,
.apple-button img {
  width: 20px;
  height: 20px;
}
</style>

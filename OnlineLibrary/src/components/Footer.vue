<template>
  <footer class="footer">
    <!-- Decorative top border -->
    <div class="footer-top-border"></div>

    <!-- Top section: logo and navigation links -->
    <div class="footer-top">
      <!-- Company logo -->
      <img src="../assets/logo.png" class="logo" />
      
      <!-- Navigation links -->
      <ul class="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/help">Help</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </div>

    <!-- Bottom section: contact info, company info, social icons -->
    <div class="footer-bottom">
      <!-- Contact details -->
      <div class="contact">
        <p>📍 99 Fifth Avenue, 3rd Floor<br />San Francisco, CA 1980</p>
        <p>📞 +1(123) 456-7890</p>
        <p>✉️ support@space.com</p>
      </div>

      <!-- About company -->
      <div class="about">
        <h4>About the company</h4>
        <p>We are an online library platform committed to providing access to a wide range of digital books.</p>
      </div>

      <!-- Social media placeholder icons -->
      <div class="social">
        <p>📸 📘 🔗</p>
      </div>
    </div>

    <!-- Copyright note -->
    <p class="copyright">© 2024 Secure. All Rights Reserved</p>
  </footer>
</template>

<style scoped>
/* Main footer styling */
.footer {
  padding: 30px 20px;
  background: transparent;
  color: #333;
  font-size: 14px;
  background-color: #373737; /* Dark background */
}

/* Top border line above footer */
.footer-top-border {
  border-top: 1px solid #ccc;
  margin-bottom: 16px;
}

/* Top section layout */
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

/* Logo styling */
.footer-top .logo {
  width: 90px;
}

/* Navigation links styling */
.footer-links {
  display: flex;
  list-style: none;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}

/* Link styling */
.footer-links a {
  text-decoration: none;
  color: #ffffff;
  transition: color 0.3s;
}

/* Link hover effect */
.footer-links a:hover {
  color: #7a5af8;
}

/* Bottom section layout */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

/* Contact and about text styling */
.contact p,
.about p {
  margin: 4px 0;
  color: #ffffff;
}

/* About section heading */
.about h4 {
  margin-bottom: 6px;
  color: #ffffff;
}

/* Social icons styling */
.social p {
  font-size: 20px;
  margin-top: 10px;
  color: #ffffff;
}

/* General footer paragraph text */
footer p {
  margin: 0;
  color: #ffffff;
}

/* Copyright text styling */
footer .copyright {
  margin-top: 20px;
  text-align: center;
  color: #ffffff;
}
</style>

<template>
  <nav class="navbar">
    <!-- Logo Image -->
    <img src="../assets/logo.png" class="logo" alt="Logo" />
    
    <!-- Navigation Links -->
    <ul class="nav-links">
      <!-- Replace these <a> with <router-link> if using Vue Router -->
      <li><a href="../Home">Home</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/help">Help</a></li>
      <li><a href="/contact">Contact Us</a></li>
      <li><a href="/about">About Us</a></li>
    </ul>

    <!-- Profile Icon Link -->
    <a href="/profile" class="profile-icon">
      <img src="../assets/profile.png" alt="Profile" />
    </a>
  </nav>
</template>

<style scoped>
/* Navbar container with horizontal layout */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 40px;
  background-color: transparent; /* Transparent background for flexibility */
}

/* Logo styling */
.logo {
  width: 120px; /* Logo width */
}

/* Navigation links container */
.nav-links {
  display: flex;            /* Arrange items horizontally */
  list-style: none;         /* Remove bullets */
  gap: 30px;                /* Space between links */
  font-weight: 500;
  color: black;
  margin-left: -100px;      /* Adjust position (optional tweak) */
}

/* Link styling */
.nav-links a {
  text-decoration: none;    /* Remove underline */
  color: inherit;           /* Inherit parent color */
}

/* Hover effect for links */
.nav-links a:hover {
  color: #7a5af8;           /* Light purple on hover */
}

/* Profile icon container */
.profile-icon {
  font-size: 22px;
  border: 1px solid #ccc;   /* Border around the icon */
  padding: 8px;             /* Inner padding */
  border-radius: 50%;       /* Circular shape */
  text-decoration: none;
  color: black;
}

/* Profile image styling */
.profile-icon img {
  width: 20px;
  height: 20px;
  border-radius: 20%;       /* Slightly rounded image */
}

/* Hover effect for profile icon */
.profile-icon:hover {
  background-color: #7a5af8;   /* Light purple background */
  border-color: #000000;       /* Darker border */
  transition: background-color 0.3s, border-color 0.3s; /* Smooth transitions */
}
</style>

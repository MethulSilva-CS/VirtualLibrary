<template>
  <div class="rb5-page">
    <!-- Navigation header component -->
    <HeaderComponent />

    <!-- Main content area -->
    <div class="rb5-content">
      <div class="book-section">
        <!-- Book cover image -->
        <img src="../assets/RB5.jpg" alt="Book Cover" class="book-image" />

        <!-- Book title -->
        <h2 class="book-title">The Bookshop of Second Chances</h2>

        <!-- Author name -->
        <p class="book-author">Dr. Lorem Ipsum</p>

        <!-- Overview section with description, price, and button -->
        <div class="overview">
          <h3>Overview</h3>

          <!-- Book description -->
          <p class="book-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel orci turpis. Proin et est vitae mi volutpat consectetur vel vel nunc.
          </p>

          <!-- Book price -->
          <p class="book-price">$20</p>

          <!-- Add to Cart button -->
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>

    <!-- Footer component -->
    <FooterComponent />
  </div>
</template>

<script>
// Importing shared components: Header and Footer
import HeaderComponent from '../components/Navbar.vue';
import FooterComponent from '../components/Footer.vue';

export default {
  name: "RB5Page", // Component name for identification
  components: {
    HeaderComponent,
    FooterComponent, // Registering imported components
  },
};
</script>

<style scoped>
/* Page layout with vertical gradient background */
.rb5-page {
  background: linear-gradient(to bottom, #c6b1ff, #e8e2ff); /* Soft purple-to-white gradient */
  min-height: 100vh; /* Ensure the page fills full height */
  display: flex; /* Flex layout */
  flex-direction: column; /* Stack items vertically */
  justify-content: space-between; /* Space header and footer apart */
  width: 1500px; /* Fixed width */
  margin: -70px -300px -50px; /* Position adjustment */
  height: 1100px; /* Set fixed height */
}

/* Content wrapper styling */
.rb5-content {
  flex: 1; /* Occupy available vertical space */
  padding: 30px 20px; /* Inner spacing */
  display: flex; /* Flex layout */
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center align content horizontally */
}

/* Book section styling */
.book-section {
  text-align: center; /* Center-align all text */
  max-width: 500px; /* Limit max width */
  margin-top: 20px; /* Top margin */
}

/* Book cover image styling */
.book-image {
  width: 300px; /* Fixed width */
  height: auto; /* Keep aspect ratio */
  border-radius: 10px; /* Rounded corners */
  margin-bottom: 20px; /* Space below image */
  margin-top: -10px; /* Slight upward shift */
}

/* Book title text */
.book-title {
  font-size: 20px; /* Medium font size */
  font-weight: bold; /* Bold text */
  margin-bottom: 4px; /* Space below title */
  color: #1f1f1f; /* Dark text color */
}

/* Author text styling */
.book-author {
  font-size: 14px; /* Smaller font */
  color: gray; /* Gray text */
  margin-bottom: 24px; /* Space below author name */
}

/* Overview heading */
.overview h3 {
  font-size: 18px; /* Heading size */
  font-weight: 600; /* Semi-bold */
  margin-bottom: 8px; /* Spacing below heading */
}

/* Book description styling */
.book-description {
  color: #666; /* Light gray text */
  font-size: 14px; /* Standard font size */
  margin-bottom: 16px; /* Space below paragraph */
  padding: 0 10px; /* Horizontal padding for readability */
}

/* Book price styling */
.book-price {
  font-size: 20px; /* Slightly large font for emphasis */
  font-weight: bold; /* Bold font */
  margin-bottom: 20px; /* Space before button */
}

/* Add to Cart button styling */
.add-to-cart {
  background-color: #e15c5c; /* Red background */
  color: white; /* White text */
  border: none; /* Remove default border */
  padding: 10px 40px; /* Padding around text */
  border-radius: 6px; /* Rounded edges */
  font-size: 14px; /* Button text size */
  cursor: pointer; /* Pointer cursor on hover */
}

/* Hover effect for Add to Cart button */
.add-to-cart:hover {
  background-color: #d04343; /* Darker red on hover */
}
</style>

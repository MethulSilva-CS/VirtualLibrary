<template>
  <div class="pb4-page">
    <!-- Top navigation bar -->
    <HeaderComponent />

    <!-- Main content container -->
    <div class="pb4-content">
      <div class="book-section">
        <!-- Book cover image -->
        <img src="../assets/PB4.jpg" alt="Book Cover" class="book-image" />

        <!-- Book title -->
        <h2 class="book-title">THE LITTLE BOOK OF STOICISM</h2>

        <!-- Book author -->
        <p class="book-author">Dr. Lorem Ipsum</p>

        <!-- Book overview -->
        <div class="overview">
          <h3>Overview</h3>

          <!-- Description paragraph -->
          <p class="book-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel orci turpis. Proin et est vitae mi volutpat consectetur vel vel nunc.
          </p>

          <!-- Price -->
          <p class="book-price">$20</p>

          <!-- Add to cart button -->
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>

    <!-- Footer component -->
    <FooterComponent />
  </div>
</template>

<script>
// Import header and footer components
import HeaderComponent from '../components/Navbar.vue';
import FooterComponent from '../components/Footer.vue';

export default {
  name: "PB4Page", // Component name
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* Page wrapper with gradient background */
.pb4-page {
  background: linear-gradient(to bottom, #c6b1ff, #e8e2ff); /* Soft gradient */
  min-height: 100vh; /* Ensure full screen height */
  display: flex; /* Flex layout */
  flex-direction: column; /* Vertical layout */
  justify-content: space-between; /* Space between header, content, footer */
  width: 1500px; /* Custom width */
  margin: -70px -300px -50px; /* Manual offset */
  height: 1100px; /* Fixed height */
}

/* Content container */
.pb4-content {
  flex: 1; /* Take remaining vertical space */
  padding: 30px 20px; /* Inner spacing */
  display: flex; /* Center layout */
  flex-direction: column; /* Stack content vertically */
  align-items: center; /* Center horizontally */
}

/* Book info container */
.book-section {
  text-align: center; /* Center all text */
  max-width: 500px; /* Limit width */
  margin-top: 20px; /* Space from top */
}

/* Image styling */
.book-image {
  width: 300px; /* Fixed width */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px; /* Rounded corners */
  margin-bottom: 20px; /* Space below */
  margin-top: -10px; /* Slight lift upwards */
}

/* Title styling */
.book-title {
  font-size: 20px; /* Medium-large text */
  font-weight: bold; /* Emphasized */
  margin-bottom: 4px; /* Space below */
  color: #1f1f1f; /* Dark text */
}

/* Author styling */
.book-author {
  font-size: 14px; /* Smaller text */
  color: gray; /* Muted tone */
  margin-bottom: 24px; /* Space before next section */
}

/* Overview section */
.overview h3 {
  font-size: 18px; /* Slightly larger heading */
  font-weight: 600; /* Semi-bold */
  margin-bottom: 8px; /* Space below */
}

/* Description text */
.book-description {
  color: #666; /* Grayish text */
  font-size: 14px; /* Regular size */
  margin-bottom: 16px; /* Space below */
  padding: 0 10px; /* Inner side padding */
}

/* Price styling */
.book-price {
  font-size: 20px; /* Emphasized price */
  font-weight: bold; /* Bold font */
  margin-bottom: 20px; /* Space before button */
}

/* Add to cart button */
.add-to-cart {
  background-color: #e15c5c; /* Red button */
  color: white; /* White text */
  border: none; /* No border */
  padding: 10px 40px; /* Button padding */
  border-radius: 6px; /* Rounded corners */
  font-size: 14px; /* Text size */
  cursor: pointer; /* Pointer on hover */
}

/* Hover effect for button */
.add-to-cart:hover {
  background-color: #d04343; /* Darker red on hover */
}
</style>

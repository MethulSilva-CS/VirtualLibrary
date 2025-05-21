<template>
  <div class="rb4-page">
    <!-- Top navigation bar -->
    <HeaderComponent />

    <!-- Main content container -->
    <div class="rb4-content">
      <div class="book-section">
        <!-- Book cover image -->
        <img src="../assets/RB4.jpg" alt="Book Cover" class="book-image" />

        <!-- Book title -->
        <h2 class="book-title">BEFORE WE WERE STRANGERS</h2>

        <!-- Book author -->
        <p class="book-author">Dr. Lorem Ipsum</p>

        <!-- Overview section -->
        <div class="overview">
          <h3>Overview</h3>

          <!-- Description paragraph -->
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

    <!-- Bottom footer -->
    <FooterComponent />
  </div>
</template>

<script>
// Import the shared navigation bar and footer components
import HeaderComponent from '../components/Navbar.vue';
import FooterComponent from '../components/Footer.vue';

export default {
  name: "RB4Page", // Unique name for this page component
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* Main page layout with background gradient */
.rb4-page {
  background: linear-gradient(to bottom, #c6b1ff, #e8e2ff); /* Soft vertical gradient */
  min-height: 100vh; /* Full screen height */
  display: flex; /* Use flexbox */
  flex-direction: column; /* Arrange children vertically */
  justify-content: space-between; /* Space out content */
  width: 1500px; /* Custom fixed width */
  margin: -70px -300px -50px; /* Adjust position to fit layout */
  height: 1100px; /* Set full height */
}

/* Content container */
.rb4-content {
  flex: 1; /* Take remaining space */
  padding: 30px 20px; /* Padding inside the container */
  display: flex; /* Flexbox layout */
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
}

/* Book info container */
.book-section {
  text-align: center; /* Center-align all inner text */
  max-width: 500px; /* Set max width */
  margin-top: 20px; /* Top spacing */
}

/* Book image styling */
.book-image {
  width: 300px; /* Fixed width */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px; /* Rounded corners */
  margin-bottom: 20px; /* Space below image */
  margin-top: -10px; /* Slight upward shift */
}

/* Title styling */
.book-title {
  font-size: 20px; /* Medium-large text */
  font-weight: bold; /* Bold font */
  margin-bottom: 4px; /* Space below */
  color: #1f1f1f; /* Dark text */
}

/* Author name styling */
.book-author {
  font-size: 14px; /* Small text */
  color: gray; /* Gray tone */
  margin-bottom: 24px; /* Space before overview */
}

/* Overview section title */
.overview h3 {
  font-size: 18px; /* Slightly larger than body text */
  font-weight: 600; /* Semi-bold */
  margin-bottom: 8px; /* Space below heading */
}

/* Overview description */
.book-description {
  color: #666; /* Gray text */
  font-size: 14px; /* Normal text size */
  margin-bottom: 16px; /* Space below paragraph */
  padding: 0 10px; /* Side padding for better readability */
}

/* Price styling */
.book-price {
  font-size: 20px; /* Emphasize price */
  font-weight: bold; /* Bold font */
  margin-bottom: 20px; /* Space before button */
}

/* Add to cart button */
.add-to-cart {
  background-color: #e15c5c; /* Red background */
  color: white; /* White text */
  border: none; /* No border */
  padding: 10px 40px; /* Spacing inside the button */
  border-radius: 6px; /* Rounded corners */
  font-size: 14px; /* Button text size */
  cursor: pointer; /* Pointer cursor on hover */
}

/* Hover effect for button */
.add-to-cart:hover {
  background-color: #d04343; /* Slightly darker red on hover */
}
</style>

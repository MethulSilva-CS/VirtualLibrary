<template>
  <div class="rb6-page">
    <!-- Navbar at the top of the page -->
    <HeaderComponent />

    <!-- Main content wrapper -->
    <div class="rb6-content">
      <div class="book-section">
        <!-- Book cover image -->
        <img src="../assets/RB6.jpg" alt="Book Cover" class="book-image" />

        <!-- Book title -->
        <h2 class="book-title">The Hardest Fall</h2>

        <!-- Book author -->
        <p class="book-author">Dr. Lorem Ipsum</p>

        <!-- Overview section with description, price, and add-to-cart button -->
        <div class="overview">
          <h3>Overview</h3>

          <!-- Short description of the book -->
          <p class="book-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel orci turpis. Proin et est vitae mi volutpat consectetur vel vel nunc.
          </p>

          <!-- Price tag -->
          <p class="book-price">$20</p>

          <!-- Add to cart button -->
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>

    <!-- Footer section at the bottom -->
    <FooterComponent />
  </div>
</template>

<script>
// Importing reusable header and footer components
import HeaderComponent from '../components/Navbar.vue';
import FooterComponent from '../components/Footer.vue';

export default {
  name: "RB6Page", // Name of the component
  components: {
    HeaderComponent, // Registering header component
    FooterComponent, // Registering footer component
  },
};
</script>

<style scoped>
/* Styles for the overall page layout */
.rb6-page {
  background: linear-gradient(to bottom, #c6b1ff, #e8e2ff); /* Soft gradient background */
  min-height: 100vh; /* Full viewport height */
  display: flex; /* Flexbox for vertical layout */
  flex-direction: column; /* Stack children vertically */
  justify-content: space-between; /* Space out header and footer */
  width: 1500px; /* Fixed width */
  margin: -70px -300px -50px; /* Offset positioning */
  height: 1100px; /* Fixed height */
}

/* Wrapper for the book content */
.rb6-content {
  flex: 1; /* Take up available vertical space */
  padding: 30px 20px; /* Inner spacing */
  display: flex; /* Flexbox layout */
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center content horizontally */
}

/* Section containing book image, title, and details */
.book-section {
  text-align: center; /* Center-align content */
  max-width: 500px; /* Limit maximum width */
  margin-top: 20px; /* Top spacing */
}

/* Styling for the book image */
.book-image {
  width: 300px; /* Fixed width */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px; /* Rounded corners */
  margin-bottom: 20px; /* Space below the image */
  margin-top: -10px; /* Slight upward shift */
}

/* Styling for book title */
.book-title {
  font-size: 20px; /* Medium size text */
  font-weight: bold; /* Emphasize title */
  margin-bottom: 4px; /* Small spacing below title */
  color: #1f1f1f; /* Dark color */
}

/* Styling for book author */
.book-author {
  font-size: 14px; /* Smaller text */
  color: gray; /* Gray color */
  margin-bottom: 24px; /* Space below author */
}

/* Heading style for the overview section */
.overview h3 {
  font-size: 18px; /* Slightly larger heading */
  font-weight: 600; /* Semi-bold */
  margin-bottom: 8px; /* Space below heading */
}

/* Styling for the book description */
.book-description {
  color: #666; /* Medium gray color */
  font-size: 14px; /* Standard paragraph font size */
  margin-bottom: 16px; /* Space below text */
  padding: 0 10px; /* Side padding for readability */
}

/* Styling for book price */
.book-price {
  font-size: 20px; /* Emphasized font size */
  font-weight: bold; /* Bold price */
  margin-bottom: 20px; /* Space before button */
}

/* Button styling for "Add to Cart" */
.add-to-cart {
  background-color: #e15c5c; /* Reddish button color */
  color: white; /* White text */
  border: none; /* Remove default borders */
  padding: 10px 40px; /* Padding around the text */
  border-radius: 6px; /* Rounded corners */
  font-size: 14px; /* Text size */
  cursor: pointer; /* Pointer cursor on hover */
}

/* Hover effect for the button */
.add-to-cart:hover {
  background-color: #d04343; /* Darker red on hover */
}
</style>

<template>
  <div class="pb3-page">
    <!-- Top navigation bar -->
    <HeaderComponent />

    <!-- Main content area -->
    <div class="pb3-content">
      <div class="book-section">
        <!-- Book image -->
        <img src="../assets/PB3.jpg" alt="Book Cover" class="book-image" />

        <!-- Book title -->
        <h2 class="book-title">FOCUS ON WHAT MATTERS</h2>

        <!-- Author name -->
        <p class="book-author">Dr. Lorem Ipsum</p>

        <!-- Overview section -->
        <div class="overview">
          <h3>Overview</h3>

          <!-- Description -->
          <p class="book-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel orci turpis. Proin et est vitae mi volutpat consectetur vel vel nunc.
          </p>

          <!-- Book price -->
          <p class="book-price">$20</p>

          <!-- Button to add the book to cart -->
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>

    <!-- Footer section -->
    <FooterComponent />
  </div>
</template>

<script>
// Import header and footer components
import HeaderComponent from '../components/Navbar.vue';
import FooterComponent from '../components/Footer.vue';

export default {
  name: "PB3Page", // Component name
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* Outer page styling with gradient background */
.pb3-page {
  background: linear-gradient(to bottom, #c6b1ff, #e8e2ff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1500px;
  margin: -70px -300px -50px;
  height: 1100px;
}

/* Main content wrapper */
.pb3-content {
  flex: 1;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Container for book info */
.book-section {
  text-align: center;
  max-width: 500px;
  margin-top: 20px;
}

/* Styling for book image */
.book-image {
  width: 300px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: -10px;
}

/* Styling for book title */
.book-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #1f1f1f;
}

/* Styling for author name */
.book-author {
  font-size: 14px;
  color: gray;
  margin-bottom: 24px;
}

/* Overview section title */
.overview h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

/* Description text styling */
.book-description {
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
  padding: 0 10px;
}

/* Price styling */
.book-price {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Button styling */
.add-to-cart {
  background-color: #e15c5c;
  color: white;
  border: none;
  padding: 10px 40px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

/* Hover effect for button */
.add-to-cart:hover {
  background-color: #d04343;
}
</style>

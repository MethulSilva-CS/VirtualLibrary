<template>
  <div class="cb1-page">
    <!-- Top Navigation Bar -->
    <HeaderComponent />

    <div class="cb1-content">
      <!-- Book Details Section -->
      <div class="book-section">
        <!-- Book Cover Image -->
        <img src="../assets/CB1.jpg" alt="Book Cover" class="book-image" />

        <!-- Book Title and Author -->
        <h2 class="book-title">Bugs That Make Your Computer Crawl</h2>
        <p class="book-author">Dr. Lorem Ipsum</p>

        <!-- Overview and Price -->
        <div class="overview">
          <h3>Overview</h3>
          <p class="book-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel orci turpis. Proin et est vitae mi volutpat consectetur vel vel nunc
          </p>
          <p class="book-price">$20</p>

          <!-- Add to Cart Button -->
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script>
// Import shared components
import HeaderComponent from '../components/Navbar.vue'
import FooterComponent from '../components/Footer.vue'

export default {
  name: "CB1Page",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* Page container with full height and gradient background */
.cb1-page {
  background: linear-gradient(to bottom, #c6b1ff, #e8e2ff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1500px;
  margin-left: -300px;
  margin-right: -300px;
  margin-top: -70px;
  margin-bottom: -50px;
  height: 1100px;
}

/* Content wrapper */
.cb1-content {
  flex: 1;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Section for the book info */
.book-section {
  text-align: center;
  max-width: 500px;
  margin-top: 20px;
}

/* Styling for the book image */
.book-image {
  width: 300px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: -10px;
}

/* Book title style */
.book-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #1f1f1f;
}

/* Book author text style */
.book-author {
  font-size: 14px;
  color: gray;
  margin-bottom: 24px;
}

/* Overview title style */
.overview h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

/* Book description text */
.book-description {
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
  padding: 0 10px;
}

/* Price display */
.book-price {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Add to Cart button style */
.add-to-cart {
  background-color: #e15c5c;
  color: white;
  border: none;
  padding: 10px 40px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

/* Button hover effect */
.add-to-cart:hover {
  background-color: #d04343;
}
</style>

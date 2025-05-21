<template>
  <div class="pb2-page">
    <!-- Header component -->
    <HeaderComponent />

    <!-- Main content area -->
    <div class="pb2-content">
      <div class="book-section">
        <!-- Book image -->
        <img src="../assets/PB2.jpg" alt="Book Cover" class="book-image" />

        <!-- Book title -->
        <h2 class="book-title">PRACTICAL STOICISM</h2>

        <!-- Author name -->
        <p class="book-author">Dr. Lorem Ipsum</p>

        <!-- Book overview section -->
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
// Importing header and footer components
import HeaderComponent from '../components/Navbar.vue';
import FooterComponent from '../components/Footer.vue';

export default {
  name: "PB2Page", // Component name
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* Outer container with gradient background */
.pb2-page {
  background: linear-gradient(to bottom, #c6b1ff, #e8e2ff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1500px;
  margin: -70px -300px -50px;
  height: 1100px;
}

/* Main content layout */
.pb2-content {
  flex: 1;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Book container */
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

/* Book title styling */
.book-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #1f1f1f;
}

/* Author name styling */
.book-author {
  font-size: 14px;
  color: gray;
  margin-bottom: 24px;
}

/* Overview heading */
.overview h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

/* Book description paragraph */
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

/* Add to cart button styling */
.add-to-cart {
  background-color: #e15c5c;
  color: white;
  border: none;
  padding: 10px 40px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

/* Hover effect for the button */
.add-to-cart:hover {
  background-color: #d04343;
}
</style>

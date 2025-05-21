<template>
  <div class="rb1-page">
    <!-- Header component at the top -->
    <HeaderComponent />

    <div class="rb1-content">
      <!-- Book section containing image, title, author, overview, etc. -->
      <div class="book-section">
        <!-- Book image -->
        <img src="../assets/RB1.jpg" alt="Book Cover" class="book-image" />
        
        <!-- Book title -->
        <h2 class="book-title">IT ENDS WITH US</h2>
        
        <!-- Book author -->
        <p class="book-author">Dr. Lorem Ipsum</p>

        <!-- Overview section -->
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

    <!-- Footer component at the bottom -->
    <FooterComponent />
  </div>
</template>

<script>
// Import reusable layout components
import HeaderComponent from '../components/Navbar.vue';
import FooterComponent from '../components/Footer.vue';

export default {
  name: "RB1Page", // Name of the component
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* Styles for the full page layout */
.rb1-page {
  background: linear-gradient(to bottom, #c6b1ff, #e8e2ff); /* Gradient background */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1500px;
  margin: -70px -300px -50px;
  height: 1100px;
}

/* Content wrapper for book details */
.rb1-content {
  flex: 1;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Container for the book details */
.book-section {
  text-align: center;
  max-width: 500px;
  margin-top: 20px;
}

/* Book cover image styling */
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

/* Overview heading */
.overview h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

/* Styling for book description text */
.book-description {
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
  padding: 0 10px;
}

/* Styling for the book price */
.book-price {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Add to Cart button styling */
.add-to-cart {
  background-color: #e15c5c;
  color: white;
  border: none;
  padding: 10px 40px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

/* Hover effect for Add to Cart button */
.add-to-cart:hover {
  background-color: #d04343;
}
</style>

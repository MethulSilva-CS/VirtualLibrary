<template>
  <div class="cb5-page">
    <!-- Header component at the top of the page -->
    <HeaderComponent />

    <div class="cb5-content">
      <!-- Section displaying book details -->
      <div class="book-section">
        <!-- Book cover image -->
        <img src="../assets/CB5.jpg" alt="Book Cover" class="book-image" />

        <!-- Book title and author -->
        <h2 class="book-title">HUMANITIES DATA ANALYSIS</h2>
        <p class="book-author">Dr. Lorem Ipsum</p>

        <!-- Overview including description, price, and Add to Cart button -->
        <div class="overview">
          <h3>Overview</h3>
          <p class="book-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel orci turpis. Proin et est vitae mi volutpat consectetur vel vel nunc.
          </p>
          <p class="book-price">$20</p>

          <!-- Button to add book to the shopping cart -->
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>

    <!-- Footer component at the bottom of the page -->
    <FooterComponent />
  </div>
</template>

<script>
// Importing header and footer components
import HeaderComponent from '../components/Navbar.vue';
import FooterComponent from '../components/Footer.vue';

export default {
  name: "CB5Page", // Name of the component
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* Main container styling for the CB5 book page */
.cb5-page {
  background: linear-gradient(to bottom, #c6b1ff, #e8e2ff); /* Light purple gradient background */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1500px;
  margin: -70px -300px -50px;
  height: 1100px;
}

/* Content section styling */
.cb5-content {
  flex: 1;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Book section block styling */
.book-section {
  text-align: center;
  max-width: 500px;
  margin-top: 20px;
}

/* Book image styling */
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

/* Book author styling */
.book-author {
  font-size: 14px;
  color: gray;
  margin-bottom: 24px;
}

/* Overview heading styling */
.overview h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

/* Book description styling */
.book-description {
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
  padding: 0 10px;
}

/* Book price styling */
.book-price {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Add to Cart button styling */
.add-to-cart {
  background-color: #e15c5c; /* Red button */
  color: white;
  border: none;
  padding: 10px 40px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

/* Hover effect for the Add to Cart button */
.add-to-cart:hover {
  background-color: #d04343;
}
</style>

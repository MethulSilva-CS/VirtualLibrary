<template>
  <div class="rb2-page">
    <!-- Header component at the top of the page -->
    <HeaderComponent />

    <div class="rb2-content">
      <!-- Section that displays the book details -->
      <div class="book-section">
        <!-- Book cover image -->
        <img src="../assets/RB2.jpg" alt="Book Cover" class="book-image" />

        <!-- Book title -->
        <h2 class="book-title">WISH YOU WERE HERE</h2>

        <!-- Author name -->
        <p class="book-author">Dr. Lorem Ipsum</p>

        <!-- Overview section including description and price -->
        <div class="overview">
          <h3>Overview</h3>

          <!-- Book description text -->
          <p class="book-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel orci turpis. Proin et est vitae mi volutpat consectetur vel vel nunc.
          </p>

          <!-- Price of the book -->
          <p class="book-price">$20</p>

          <!-- Button to add the book to cart -->
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>

    <!-- Footer component at the bottom of the page -->
    <FooterComponent />
  </div>
</template>

<script>
// Importing reusable layout components
import HeaderComponent from '../components/Navbar.vue';
import FooterComponent from '../components/Footer.vue';

export default {
  name: "RB2Page", // Component name
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* Main container with background and layout setup */
.rb2-page {
  background: linear-gradient(to bottom, #c6b1ff, #e8e2ff); /* Gradient background */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1500px;
  margin: -70px -300px -50px;
  height: 1100px;
}

/* Content wrapper for the book section */
.rb2-content {
  flex: 1;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Styling for the section that displays book details */
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

/* Title of the book */
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

/* Heading for the overview section */
.overview h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

/* Styling for the description of the book */
.book-description {
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
  padding: 0 10px;
}

/* Styling for the price of the book */
.book-price {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Styling for the Add to Cart button */
.add-to-cart {
  background-color: #e15c5c;
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

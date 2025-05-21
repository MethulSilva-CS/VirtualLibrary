<template>
  <div class="pb5-page">
    <!-- Navigation bar at the top -->
    <HeaderComponent />

    <!-- Main book content -->
    <div class="pb5-content">
      <div class="book-section">
        <!-- Book cover image -->
        <img src="../assets/PB5.jpg" alt="Book Cover" class="book-image" />

        <!-- Book title -->
        <h2 class="book-title">FOCUS</h2>

        <!-- Book author -->
        <p class="book-author">Dr. Lorem Ipsum</p>

        <!-- Overview section -->
        <div class="overview">
          <h3>Overview</h3>

          <!-- Description -->
          <p class="book-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel orci turpis. Proin et est vitae mi volutpat consectetur vel vel nunc.
          </p>

          <!-- Price -->
          <p class="book-price">$20</p>

          <!-- Add to Cart button -->
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
  name: "PB5Page", // Component name for this book
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
/* Page layout with background gradient */
.pb5-page {
  background: linear-gradient(to bottom, #c6b1ff, #e8e2ff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1500px;
  margin: -70px -300px -50px;
  height: 1100px;
}

/* Content wrapper */
.pb5-content {
  flex: 1;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Section containing the book's details */
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

/* Title style */
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

/* Overview text */
.book-description {
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
  padding: 0 10px;
}

/* Price text */
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

/* Hover effect */
.add-to-cart:hover {
  background-color: #d04343;
}
</style>

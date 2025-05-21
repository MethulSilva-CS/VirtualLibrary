<template>
  <div class="computer-page">
    <HeaderComponent />

    <!-- Search Bar -->
    <div class="search-bar-container">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search by title or number"
        class="search-bar"
      />
   
    </div>

    <!-- Books Grid -->
    <div class="books-grid">
      <!-- Loop through filtered books and display each book card -->
      <div
        v-for="(book, index) in filteredBooks"
        :key="book.id"
        class="book-card"
        :style="cardStyles[book.id - 1]"
        @click="handleCardClick(book.id - 1)"
      >
        <img :src="book.image" class="book-cover" :alt="book.title" />
        <p class="book-title">{{ book.id }}. {{ book.title }}</p>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../components/Navbar.vue'
import FooterComponent from '../components/Footer.vue'

export default {
  name: 'ComputerPage',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      searchQuery: '', // Bind user input for searching
      // Array of book objects with id, title, and image path
      books: [
        { id: 1, title: 'Bugs That Make Your Computer Crawl', image: new URL('../assets/CB1.jpg', import.meta.url).href },
        { id: 2, title: "You Can't Dance to These Rhythms", image: new URL('../assets/CB2.jpg', import.meta.url).href },
        { id: 3, title: 'Humans vs Computers', image: new URL('../assets/CB3.jpg', import.meta.url).href },
        { id: 4, title: 'The Code Book', image: new URL('../assets/CB4.jpg', import.meta.url).href },
        { id: 5, title: 'Humanities Data Analysis', image: new URL('../assets/CB5.jpg', import.meta.url).href },
        { id: 6, title: 'Python for Data Analysis', image: new URL('../assets/CB6.jpg', import.meta.url).href }
      ],
      // Array of style objects for each card's background gradient
      cardStyles: [
        { background: 'linear-gradient(135deg, #D9442E, #FFFFFF)' },
        { background: 'linear-gradient(135deg, #CC324A, #FFFFFF)' },
        { background: 'linear-gradient(135deg, #C39F64, #FFFFFF)' },
        { background: 'linear-gradient(135deg, #188B84, #FFFFFF)' },
        { background: 'linear-gradient(135deg, #130C35, #FFFFFF)' },
        { background: 'linear-gradient(135deg, #FCD9E9, #FFFFFF)' }
      ],
      // Corresponding route paths for each book
      bookRoutes: ['/cb1', '/cb2', '/cb3', '/cb4', '/cb5', '/cb6']
    }
  },
  computed: {
    // Filter books based on search query (by title or ID)
    filteredBooks() {
      const query = this.searchQuery.trim().toLowerCase()
      return this.books.filter(book => {
        return (
          book.title.toLowerCase().includes(query) ||
          book.id.toString() === query
        )
      })
    }
  },
  methods: {
    // Navigate to the book's route when a card is clicked
    handleCardClick(index) {
      const route = this.bookRoutes[index]
      if (route) {
        this.$router.push(route)
      }
    }
  }
}
</script>

<style scoped>
.computer-page {
  background: linear-gradient(to bottom, #c8a2ff, #ffffff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 1500px;
  margin-left: -300px;
  margin-right: -300px;
  margin-top: -70px;
  margin-bottom: -50px;
  height: 1100px;
}

.search-bar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto 40px;
  position: relative;
  width: 60%;
}

.search-bar {
  width: 100%;
  padding: 12px 18px;
  border-radius: 25px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.search-icon {
  position: absolute;
  right: 20px;
  font-size: 20px;
  color: #777;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 20px;
  padding: 0 40px 60px;
  justify-items: center;
}

.book-card {
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  width: 140px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  cursor: pointer;
}

.book-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

.book-cover {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.book-title {
  margin-top: 12px;
  font-weight: 600;
  font-size: 16px;
  color: #333;
}
</style>

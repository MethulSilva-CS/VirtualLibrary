<template>
  <div class="romance-page">
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
  name: 'RomancePage',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      searchQuery: '',
      // Book data with IDs, titles, and cover images
      books: [
        { id: 1, title: 'IT ENDS WITH US', image: new URL('../assets/RB1.jpg', import.meta.url).href },
        { id: 2, title: 'WISH YOU WERE HERE', image: new URL('../assets/RB2.jpg', import.meta.url).href },
        { id: 3, title: 'The Beginner’s Guide to Loneliness', image: new URL('../assets/RB3.jpg', import.meta.url).href },
        { id: 4, title: 'BEFORE WE WERE STRANGERS', image: new URL('../assets/RB4.jpg', import.meta.url).href },
        { id: 5, title: 'The Bookshop of Second Chances', image: new URL('../assets/RB5.jpg', import.meta.url).href },
        { id: 6, title: 'The Hardest Fall', image: new URL('../assets/RB6.jpg', import.meta.url).href }
      ],
      // Individual card background styles
      cardStyles: [
        { background: 'linear-gradient(135deg, #D76BD3, #FFFFFF)' },
        { background: 'linear-gradient(135deg, #588087, #FFFFFF)' },
        { background: 'linear-gradient(135deg, #41C7C0, #FFFFFF)' },
        { background: 'linear-gradient(135deg, #100A17, #FFFFFF)' },
        { background: 'linear-gradient(135deg, #F8EB99, #FFFFFF)' },
        { background: 'linear-gradient(135deg, #81D3B1, #FFFFFF)' }
      ],
      // Routes corresponding to each book
      bookRoutes: ['/rb1', '/rb2', '/rb3', '/rb4', '/rb5', '/rb6']
    }
  },
  computed: {
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
.romance-page {
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

/* [same styles for search bar, icon, books grid, book card, etc.] */
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

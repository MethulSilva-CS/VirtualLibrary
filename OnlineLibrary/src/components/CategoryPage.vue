<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

const router = useRouter()
const searchQuery = ref('')
const categories = ref([])

// Fetch categories from backend
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/categories')
    categories.value = response.data
  } catch (error) {
    console.error('Failed to fetch categories:', error)
  }
})

// Filter categories by search input
const filteredCategories = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return categories.value

  return categories.value.filter(category =>
    category.keywords.some(keyword =>
      keyword.toLowerCase().includes(query)
    )
  )
})

// Navigate to category route
function goToCategory(category) {
  router.push(`/${category.toLowerCase()}`)
}
</script>

<template>
  <div class="page-container">
    <!-- Navbar -->
    <Navbar />

    <!-- Main content -->
    <main class="main">
      <h1>Hello, Alex <span>👋</span></h1>
      <p class="subtitle">What do you want to read today?</p>

      <div class="search-bar">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search here..."
        />
      </div>

      <div class="categories">
        <div
          class="card"
          v-for="category in filteredCategories"
          :key="category.name"
          @click="goToCategory(category.name)"
        >
          {{ category.name }}
        </div>
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  background-color: #d8cfff;
  width: 1500px;
  margin-left: -300px;
  margin-right: -300px;
  margin-top: -70px;
  margin-bottom: -50px;
  height: 1000px;
}

.main {
  flex: 1;
  text-align: center;
  padding: 30px 20px;
}

h1 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 6px;
  color: black;
}

.subtitle {
  color: #555;
  font-size: 16px;
  margin-bottom: 30px;
}

.search-bar {
  margin: 0 auto 30px;
  width: 85%;
  max-width: 500px;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 30px;
  padding: 10px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  box-shadow: none;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  background: linear-gradient(to bottom right, #a084dc, #d8cfff);
  width: 140px;
  height: 160px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  color: #333;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
}
</style>

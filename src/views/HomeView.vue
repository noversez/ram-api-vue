<template>
  <div class="main-container">
    <div class="filter-container">
      <input v-model="filters.name" placeholder="Name" @keyup.enter="applyFilters">
      <select v-model="filters.status">
        <option value="">Any</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <button @click="applyFilters">Apply</button>
    </div>
    
    <div class="cards">
      <div v-for="character in characters" :key="character.id" class="character-card">
        <img :src="character.image" alt="character">
        <div>{{ character.name }}</div>
        <div>{{ character.status }}</div>
        <div>{{ character.species }}</div>
      </div>
    </div>
    <div class="pagination">
    <button @click="changePage(-1)" :disabled="!info.prev">Prev</button>
    <button @click="changePage(1)" :disabled="!info.next">Next</button>
  </div>
  </div>
</template>

<script lang="ts" setup>
import { characters, filters, info, applyFilters, changePage } from '@/composables/useCharacters';
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap; 
  gap: 16px; 
  justify-content: space-between; 
}

.character-card {
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding: 10px;
  flex: 1 1 200px;
  min-width: 200px;
  max-width: 300px; 
  background-color: #3b1313; 
  border: 1px solid #E0E0E0; 
  border-radius: 4px;
}

img {
  max-width: 100%; 
  border-radius: 4px; 
  margin-bottom: 8px; 
}

.character-card > div {
  margin-bottom: 4px;
}


.filter-container {
  display: flex;
  justify-content: end;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #3b1313;
  border-radius: 4px;
}

.filter-container input, .filter-container select, .filter-container button {
  margin-right: 10px;
  padding: 10px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  outline: none;
}

.filter-container button {
  color: #fff;
  background-color: #2c3e50;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.filter-container button:hover {
  background-color: #34495e;
}

.pagination {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.pagination button {
  background-color: #2c3e50; 
  color: #fff; 
  border: 1px solid #34495e; 
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  font-size: 16px; 
  transition: background-color 0.3s, transform 0.2s; 
  border-radius: 4px; 
}

.pagination button:hover {
  background-color: #34495e; 
  transform: translateY(-2px);
}

.pagination button:disabled {
  background-color: #7f8c8d; 
  cursor: not-allowed; 
  opacity: 0.6; 
}
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>

      <img alt="Vue logo" class="logo" src="../src/assets/businessCard.jpg" width="125" height="125" />
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped> 

header {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
}

.logo {
  margin-left: 15%;
  width: 100%;
}

nav {
  display: flex;
  gap: 20px;
  margin-left: auto;
  margin-right: 20%;
}

nav a {
  text-decoration: none;
  font-size: 1.5em;
  color: #333;
}

nav a:hover {
  color: #007bff;
}

@media (max-width: 1024px) {
  header {
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .logo {
    margin-left: 10px;
    margin-bottom: 10px;
  }

  nav {
    margin-left: 0;
    margin-right: 0;
  }

  nav a {
    font-size: 1.2em;
  }
}
</style>

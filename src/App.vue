<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped> 

header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  height: 300px; /* Adjust height as needed */
  background: url('../src/assets/businessCard.jpg') no-repeat center center;
  background-size: 147%; /* Scale the image to show more details */
  background-attachment: fixed;
  background-position: center;
  color: white;
  
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

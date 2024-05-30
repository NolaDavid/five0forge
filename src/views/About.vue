<template>
  <div class="about-me">
    <h1>About Us</h1>
    <p>
      Arts and crafts have always been my passion. Ever since I was a child, I've found immense joy in creating things with my hands. Whether it's painting, knitting, or sculpting, the process of crafting allows me to express myself and brings a sense of tranquility and fulfillment. It's not just a hobby; it's a vital part of maintaining my mental health. When I'm immersed in a project, all my worries seem to fade away, leaving me refreshed and centered.
    </p>
    <div class="social-icons">
      <a href="https://www.facebook.com/five0forge" target="_blank" aria-label="Facebook" class="facebook">
        <i class="fa fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/five0forge" target="_blank" aria-label="Instagram" class="instagram">
        <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>

<style scoped>
.about-me {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

p {
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  justify-content: space-around; /* Use space-between if you want more space between icons */
  align-items: center;
  padding-top: 3.5em;
}

.social-icons a {
  font-size: 1.5em;
  color: #555;
  transition: color 0.3s;
}

.social-icons a.facebook {
  color: #3b5998; /* Facebook blue color */
}
.social-icons a.instagram {
  background: -webkit-linear-gradient(#feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
  -webkit-background-clip: text;
  background-clip:text;
  -webkit-text-fill-color: transparent; /*Instagram color gradient */
}

.social-icons a:hover {
  color: #007bff;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

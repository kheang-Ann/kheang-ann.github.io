<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-text">
          <p>Designed & Built by {{ profile.name }}</p>
          <p class="copyright">&copy; {{ currentYear }} All Rights Reserved.</p>
        </div>
        
        <div class="back-to-top" @click="scrollToTop">
          <span>Back to Top</span>
          <span class="arrow">↑</span>
        </div>
      </div>
      
      <div class="tech-stack">
        <p>Built with</p>
        <div class="tech-icons">
          <span class="tech-icon" title="Vue.js">Vue.js</span>
          <span class="tech-icon" title="Vite">html</span>
          <span class="tech-icon" title="CSS3">CSS</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { profileData } from '../data/mockData.js';

const profile = profileData;
const currentYear = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
.footer {
  background: #0a192f;
  padding: 2rem;
  border-top: 1px solid #233554;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.footer-text p {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.copyright {
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
}

.back-to-top {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #64ffda;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.back-to-top:hover {
  background: rgba(100, 255, 218, 0.1);
  transform: translateY(-3px);
}

.arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.back-to-top:hover .arrow {
  transform: translateY(-3px);
}

.tech-stack {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid #233554;
}

.tech-stack p {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
}

.tech-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.tech-icon {
  color: #64ffda;
  font-size: 0.85rem;
  font-family: 'Courier New', monospace;
  background: #112240;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  border: 1px solid #233554;
  transition: all 0.3s ease;
}

.tech-icon:hover {
  border-color: #64ffda;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(100, 255, 218, 0.2);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .back-to-top {
    order: -1;
  }
}

@media (max-width: 480px) {
  .tech-icons {
    gap: 0.5rem;
  }

  .tech-icon {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>

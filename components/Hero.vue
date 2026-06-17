<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <p class="greeting">Hi, my name is</p>
        <h1 class="name">{{ profile.name }}</h1>
        <h2 class="title">{{ profile.title }}</h2>
        <p class="tagline">{{ profile.tagline }}</p>
        <p class="about-short">{{ profile.about }}</p>
        
        <div class="cta-buttons">
          <a href="#projects" class="btn btn-primary">View My Work</a>
          <a href="#contact" class="btn btn-secondary">Contact Me</a>
        </div>
        
        <div class="social-links">
          <a v-for="social in socialLinks" :key="social.name" 
             :href="social.url" 
             target="_blank" 
             rel="noopener noreferrer"
             class="social-link">
            <span>{{ social.name }}</span>
          </a>
        </div>
      </div>
      
      <div class="hero-image">
        <div class="image-container">
          <div class="image-wrapper">
            <div class="profile-placeholder">
              <span>&lt;/&gt;</span>
            </div>
          </div>
          <div class="image-decoration"></div>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator">
      <span>Scroll Down</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script setup>
import { profileData, socialLinks } from '../data/mockData.js';

const profile = profileData;
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem 2rem;
  background: linear-gradient(135deg, #0a192f 0%, #112240 50%, #0a192f 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(100, 255, 218, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 1;
}

.greeting {
  color: #64ffda;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
}

.name {
  font-size: 4rem;
  font-weight: bold;
  color: #ccd6f6;
  margin-bottom: 0.5rem;
  line-height: 1.1;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: #8892b0;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.tagline {
  font-size: 1.5rem;
  color: #8892b0;
  margin-bottom: 1.5rem;
  max-width: 500px;
}

.about-short {
  color: #8892b0;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 500px;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid #64ffda;
}

.btn-primary {
  background: transparent;
  color: #64ffda;
}

.btn-primary:hover {
  background: rgba(100, 255, 218, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
}

.btn-secondary {
  background: #64ffda;
  color: #0a192f;
}

.btn-secondary:hover {
  background: #00d4ff;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  color: #8892b0;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.social-link:hover {
  color: #64ffda;
  border-bottom-color: #64ffda;
  transform: translateY(-2px);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  position: relative;
}

.image-wrapper {
  position: relative;
  z-index: 2;
}

.profile-placeholder {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #112240, #233554);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #64ffda;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.profile-placeholder:hover {
  transform: scale(1.05);
  box-shadow: 0 30px 60px rgba(100, 255, 218, 0.2);
}

.profile-placeholder span {
  font-size: 8rem;
  color: #64ffda;
  font-family: 'Courier New', monospace;
}

.image-decoration {
  position: absolute;
  top: 20px;
  left: 20px;
  right: -20px;
  bottom: -20px;
  border: 3px solid #00d4ff;
  border-radius: 20px;
  z-index: 1;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #8892b0;
  font-size: 0.9rem;
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 20px;
  height: 30px;
  border: 2px solid #64ffda;
  border-radius: 15px;
  position: relative;
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: #64ffda;
  border-radius: 2px;
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0%, 100% {
    opacity: 0;
    transform: translateX(-50%) translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateX(-50%) translateY(10px);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }

  .name {
    font-size: 3rem;
  }

  .title {
    font-size: 2rem;
  }

  .tagline,
  .about-short {
    max-width: 100%;
  }

  .cta-buttons {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .profile-placeholder {
    width: 280px;
    height: 280px;
  }

  .profile-placeholder span {
    font-size: 6rem;
  }
}

@media (max-width: 480px) {
  .name {
    font-size: 2.5rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .profile-placeholder {
    width: 220px;
    height: 220px;
  }

  .profile-placeholder span {
    font-size: 4rem;
  }
}
</style>

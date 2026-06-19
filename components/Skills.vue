<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section-title">
        <span class="number">02.</span> Skills & Technologies
        <span class="line"></span>
      </h2>
      
      <div class="skills-content">
        <div class="skills-grid">
          <div v-for="skill in profile.skills" :key="skill.name" class="skill-item">
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
        
        <div class="tech-categories">
          <div class="category">
            <h3 class="category-title">Frontend</h3>
            <div class="tech-tags">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">Flutter</span>
              <span class="tech-tag">JavaScript</span>
              <span class="tech-tag">HTML/CSS</span>
            </div>
          </div>
          
          <div class="category">
            <h3 class="category-title">Backend</h3>
            <div class="tech-tags">
              <span class="tech-tag">Nest.js</span>
            </div>
          </div>
          
          <div class="category">
            <h3 class="category-title">Database</h3>
            <div class="tech-tags">
              <span class="tech-tag">MongoDB</span>
              <span class="tech-tag">SQL</span>
              <span class="tech-tag">PostgreSQL</span>
            </div>
          </div>
          
          <div class="category">
            <h3 class="category-title">Tools & Others</h3>
            <div class="tech-tags">
              <span class="tech-tag">Git</span>
              <span class="tech-tag">Docker</span>
              <span class="tech-tag">VS Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { profileData } from '../data/mockData.js';

const profile = profileData;
</script>

<style scoped>
.skills {
  padding: 6rem 2rem;
  background: #112240;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ccd6f6;
  font-size: 2rem;
  margin-bottom: 3rem;
  white-space: nowrap;
}

.number {
  color: #64ffda;
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
}

.line {
  flex: 1;
  height: 1px;
  background: #233554;
  max-width: 300px;
}

.skills-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  background: #0a192f;
  padding: 1.2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  color: #ccd6f6;
  font-weight: 600;
}

.skill-level {
  color: #64ffda;
  font-family: 'Courier New', monospace;
  font-weight: bold;
}

.skill-bar {
  height: 8px;
  background: #233554;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #64ffda, #00d4ff);
  border-radius: 4px;
  transition: width 1s ease-in-out;
  position: relative;
  overflow: hidden;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.tech-categories {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.category {
  background: #0a192f;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 3px solid #64ffda;
}

.category-title {
  color: #64ffda;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.tech-tag {
  background: #233554;
  color: #8892b0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: default;
}

.tech-tag:hover {
  background: #64ffda;
  color: #0a192f;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
}

@media (max-width: 768px) {
  .skills-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .section-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.3rem;
  }

  .skill-item {
    padding: 1rem;
  }
}
</style>

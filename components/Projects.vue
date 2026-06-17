<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">
        <span class="number">03.</span> Featured Projects
        <span class="line"></span>
      </h2>
      
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" 
             class="project-card"
             :class="{ featured: project.featured }">
          <div class="project-image">
            <img :src="project.image" :alt="project.name" />
            <div class="image-overlay">
              <div class="overlay-links">
                <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" 
                   class="overlay-link" title="View Code">
                  <span>Code</span>
                </a>
                <a v-if="project.live" :href="project.live" target="_blank" rel="noopener noreferrer" 
                   class="overlay-link" title="Live Demo">
                  <span>Live</span>
                </a>
              </div>
            </div>
          </div>
          
          <div class="project-content">
            <h3 class="project-name">{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-tech">
              <span v-for="tech in project.technologies" :key="tech" class="tech-badge">
                {{ tech }}
              </span>
            </div>
            
            <div class="project-links">
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" 
                 class="project-link">
                <span>GitHub</span>
              </a>
              <a v-if="project.live" :href="project.live" target="_blank" rel="noopener noreferrer" 
                 class="project-link">
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="view-more">
        <a href="https://github.com/kheang-Ann" target="_blank" rel="noopener noreferrer" class="btn-view-more">
          View More on GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projectsData } from '../data/mockData.js';

const projects = projectsData;
</script>

<style scoped>
.projects {
  padding: 6rem 2rem;
  background: #0a192f;
}

.container {
  max-width: 1200px;
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: #112240;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border-color: #64ffda;
}

.project-card.featured {
  border-color: #64ffda;
}

.project-card.featured:hover {
  box-shadow: 0 25px 50px rgba(100, 255, 218, 0.2);
}

.project-image {
  position: relative;
  overflow: hidden;
  height: 220px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 25, 47, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.overlay-links {
  display: flex;
  gap: 1rem;
}

.overlay-link {
  background: #64ffda;
  color: #0a192f;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  transform: translateY(20px);
}

.project-card:hover .overlay-link {
  transform: translateY(0);
}

.overlay-link:hover {
  background: #00d4ff;
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
}

.project-name {
  color: #ccd6f6;
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  font-weight: bold;
}

.project-description {
  color: #8892b0;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}

.tech-badge {
  background: #233554;
  color: #64ffda;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-family: 'Courier New', monospace;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: #8892b0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.project-link:hover {
  color: #64ffda;
  border-bottom-color: #64ffda;
}

.view-more {
  text-align: center;
  margin-top: 3rem;
}

.btn-view-more {
  display: inline-block;
  padding: 1rem 2.5rem;
  border: 2px solid #64ffda;
  color: #64ffda;
  text-decoration: none;
  font-weight: 600;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.btn-view-more:hover {
  background: rgba(100, 255, 218, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.3rem;
  }

  .project-image {
    height: 180px;
  }
}
</style>

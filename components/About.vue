<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">
        <span class="number">01.</span> About Me
        <span class="line"></span>
      </h2>
      
      <div class="about-content">
        <div class="about-text">
          <p class="intro">
            Hello! My name is <strong>{{ profile.name }}</strong> and I'm a 
            <strong>Software Engineering Student</strong> passionate about building 
            innovative solutions through code.
          </p>
          
          <p>
            {{ profile.about }}
          </p>
          
          <p>
            I enjoy solving complex problems, learning new technologies, and contributing 
            to open-source projects. When I'm not coding, you can find me exploring new 
            tech trends, reading technical blogs, or working on personal projects.
          </p>
          
          <div class="education-section">
            <h3 class="subsection-title">Education</h3>
            <div v-for="edu in profile.education" :key="edu.school" class="education-item">
              <h4>{{ edu.degree }}</h4>
              <p class="school">{{ edu.school }}</p>
              <p class="year">{{ edu.year }}</p>
            </div>
          </div>
        </div>
        
        <div class="about-image">
          <div class="image-frame">
            <img src="../assets/ann.JPG" alt="Ann's Profile" class="profile-image" />
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
.about {
  padding: 6rem 2rem;
  background: #0a192f;
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

.about-content {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 4rem;
  align-items: start;
}

.about-text p {
  color: #8892b0;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.about-text strong {
  color: #64ffda;
}

.subsection-title {
  color: #ccd6f6;
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
}

.education-item {
  background: #112240;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 3px solid #64ffda;
  transition: all 0.3s ease;
}

.education-item:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
}

.education-item h4 {
  color: #ccd6f6;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.education-item .school {
  color: #64ffda;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.education-item .year {
  color: #8892b0;
  font-size: 0.9rem;
  font-family: 'Courier New', monospace;
}

.education-item .gpa {
  color: #64ffda;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-frame {
  position: relative;
}

.profile-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  border: 3px solid #64ffda;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
  box-shadow: 0 30px 60px rgba(100, 255, 218, 0.2);
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-image {
    order: -1;
  }

  .profile-image {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.5rem;
  }

  .profile-image {
    width: 200px;
    height: 200px;
  }
}
</style>

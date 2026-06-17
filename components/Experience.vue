<template>
  <section id="experience" class="experience">
    <div class="container">
      <h2 class="section-title">
        <span class="number">04.</span> Experience
        <span class="line"></span>
      </h2>
      
      <div class="timeline">
        <div v-for="(exp, index) in profile.experience" :key="index" 
             class="timeline-item"
             :class="{ 'from-left': index % 2 === 0 }">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3 class="position">{{ exp.position }}</h3>
              <span class="company">{{ exp.company }}</span>
            </div>
            <span class="duration">{{ exp.duration }}</span>
            <p class="description">{{ exp.description }}</p>
            
            <div class="achievements">
              <div class="achievement-item">
                <span class="achievement-icon">✓</span>
                <span>Successfully delivered projects on time</span>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">✓</span>
                <span>Collaborated with cross-functional teams</span>
              </div>
              <div class="achievement-item">
                <span class="achievement-icon">✓</span>
                <span>Implemented best practices and code reviews</span>
              </div>
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
.experience {
  padding: 6rem 2rem;
  background: #112240;
}

.container {
  max-width: 900px;
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

.timeline {
  position: relative;
  padding-left: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #64ffda, #00d4ff, #64ffda);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: fadeInLeft 0.6s ease forwards;
}

.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-item:nth-child(3) { animation-delay: 0.3s; }

@keyframes fadeInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.timeline-marker {
  position: absolute;
  left: -3rem;
  top: 0;
  width: 18px;
  height: 18px;
  background: #64ffda;
  border-radius: 50%;
  border: 3px solid #0a192f;
  box-shadow: 0 0 15px rgba(100, 255, 218, 0.5);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-marker {
  transform: scale(1.3);
  box-shadow: 0 0 25px rgba(100, 255, 218, 0.8);
}

.timeline-content {
  background: #0a192f;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #233554;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  border-color: #64ffda;
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.15);
  transform: translateX(10px);
}

.timeline-header {
  margin-bottom: 0.8rem;
}

.position {
  color: #ccd6f6;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.company {
  color: #64ffda;
  font-weight: 600;
  font-size: 1.1rem;
}

.duration {
  display: inline-block;
  color: #8892b0;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  padding: 0.3rem 0.8rem;
  background: #233554;
  border-radius: 15px;
}

.description {
  color: #8892b0;
  line-height: 1.7;
  margin-bottom: 1.2rem;
}

.achievements {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.achievement-item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: #8892b0;
  font-size: 0.95rem;
}

.achievement-icon {
  color: #64ffda;
  font-weight: bold;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }

  .timeline {
    padding-left: 2rem;
  }

  .timeline::before {
    left: 5px;
  }

  .timeline-marker {
    left: -2.3rem;
    width: 14px;
    height: 14px;
  }

  .timeline-item {
    padding-left: 1.5rem;
  }

  .timeline-content {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.3rem;
  }

  .position {
    font-size: 1.1rem;
  }

  .company {
    font-size: 1rem;
  }
}
</style>

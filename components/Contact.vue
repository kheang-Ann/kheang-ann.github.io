<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">
        <span class="number">05.</span> Get In Touch
        <span class="line"></span>
      </h2>
      
      <div class="contact-content">
        <div class="contact-text">
          <p class="intro">
            I'm currently looking for new opportunities and would love to hear from you. 
            Whether you have a question, want to collaborate, or just want to say hi, 
            my inbox is always open!
          </p>
          
          <a :href="`mailto:${profile.email}`" class="email-link">
            {{ profile.email }}
          </a>
          
          <div class="contact-cta">
            <p>Let's build something amazing together!</p>
          </div>
        </div>
        
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="formData.name" required placeholder="Your name"/>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" required placeholder="Username@gmail.com" />
          </div>
          
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" v-model="formData.subject" required placeholder="Project Inquiry" />
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="formData.message" required 
                      placeholder="Tell me about your project or idea..." rows="5"></textarea>
          </div>
          
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
          </button>
          
          <p v-if="formStatus" :class="['form-status', formStatus.type]">
            {{ formStatus.message }}
          </p>
        </form>
      </div>
      
      <div class="social-section">
        <h3 class="social-title">Connect With Me</h3>
        <div class="social-links">
          <a v-for="social in socialLinks" :key="social.name" 
             :href="social.url" 
             target="_blank" 
             rel="noopener noreferrer"
             class="social-card">
            <span class="social-name">{{ social.name }}</span>
            <span class="social-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import { profileData, socialLinks } from '../data/mockData.js';

const profile = profileData;

// ============================================================
// EmailJS Configuration
// These values are loaded from the .env file (prefixed with VITE_)
// 1. Sign up at https://www.emailjs.com/ (free tier: 200 emails/month)
// 2. Create an Email Service (e.g., Gmail) and copy the Service ID
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Copy your Public Key from Account > API Keys
// 5. Put all 3 values in your .env file
// ============================================================
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const formStatus = ref(null);

const handleSubmit = async () => {
  isSubmitting.value = true;
  formStatus.value = null;

  try {
    // Send real email via EmailJS
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        // These keys must match the {{variable_name}} in your EmailJS template
        name: formData.value.name,
        email: formData.value.email,
        title: formData.value.subject,
        message: formData.value.message,
        time: new Date().toLocaleString() // Adds the {{time}} variable from your template
      },
      EMAILJS_PUBLIC_KEY
    );

    formStatus.value = {
      type: 'success',
      message: 'Thank you! Your message has been sent successfully. I will get back to you soon!'
    };

    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    formStatus.value = {
      type: 'error',
      message: 'Oops! Something went wrong. Please try again or email me directly.'
    };
  } finally {
    isSubmitting.value = false;

    // Clear status after 5 seconds
    setTimeout(() => {
      formStatus.value = null;
    }, 5000);
  }
};
</script>

<style scoped>
.contact {
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
  justify-content: center;
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.contact-text .intro {
  color: #8892b0;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.email-link {
  display: inline-block;
  color: #64ffda;
  font-size: 1.5rem;
  text-decoration: none;
  border: 2px solid #64ffda;
  padding: 1rem 2rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
}

.email-link:hover {
  background: rgba(100, 255, 218, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
}

.contact-cta p {
  color: #ccd6f6;
  font-size: 1.2rem;
  font-weight: 600;
}

.contact-form {
  background: #112240;
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid #233554;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #ccd6f6;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.9rem 1.2rem;
  background: #0a192f;
  border: 1px solid #233554;
  border-radius: 5px;
  color: #ccd6f6;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #64ffda;
  box-shadow: 0 0 15px rgba(100, 255, 218, 0.2);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #8892b0;
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: transparent;
  color: #64ffda;
  border: 2px solid #64ffda;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: rgba(100, 255, 218, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-status {
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 5px;
  text-align: center;
  font-size: 0.95rem;
}

.form-status.success {
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  border: 1px solid #64ffda;
}

.form-status.error {
  background: rgba(255, 100, 100, 0.1);
  color: #ff6464;
  border: 1px solid #ff6464;
}

.social-section {
  text-align: center;
  padding-top: 3rem;
  border-top: 1px solid #233554;
}

.social-title {
  color: #ccd6f6;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.social-card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #112240;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid #233554;
  transition: all 0.3s ease;
}

.social-card:hover {
  border-color: #64ffda;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.15);
}

.social-name {
  color: #8892b0;
  font-weight: 600;
  transition: color 0.3s ease;
}

.social-card:hover .social-name {
  color: #64ffda;
}

.social-arrow {
  color: #64ffda;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.social-card:hover .social-arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .email-link {
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
  }

  .contact-form {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.3rem;
  }

  .social-links {
    flex-direction: column;
    align-items: center;
  }

  .social-card {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>

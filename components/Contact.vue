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
          
          <!-- Direct Email action with 1-click Copy feature -->
          <div class="direct-email-card">
            <a 
              :href="`mailto:${profile.email}?subject=Project%20Inquiry%20via%20Portfolio`" 
              class="email-link" 
              aria-label="Send direct email"
              title="Click to open default mail app"
            >
              <svg class="email-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>{{ profile.email }}</span>
            </a>

            <button 
              type="button" 
              class="copy-email-btn" 
              @click="copyEmailToClipboard" 
              :aria-label="copied ? 'Email copied' : 'Copy email address'"
              :title="copied ? 'Copied!' : 'Copy to clipboard'"
            >
              <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <svg v-else class="copied-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
            </button>
          </div>
          
          <div class="contact-cta">
            <p>Let's build something amazing together!</p>
          </div>
        </div>
        
        <form class="contact-form" @submit.prevent="handleSubmit" novalidate :aria-busy="isSubmitting">
          <!-- Honeypot anti-spam field (hidden from legitimate users) -->
          <input 
            type="text" 
            name="_gotcha" 
            v-model="honeypot" 
            tabindex="-1" 
            autocomplete="off" 
            aria-hidden="true" 
            class="honeypot-field" 
          />

          <div class="form-group">
            <label for="name">Your Name <span class="required">*</span></label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              required 
              maxlength="100"
              autocomplete="name"
              :disabled="isSubmitting"
              placeholder="e.g. Sokha Doe"
            />
          </div>
          
          <div class="form-group">
            <label for="email">Your Email (Gmail / Any Email) <span class="required">*</span></label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              required 
              maxlength="100"
              autocomplete="email"
              inputmode="email"
              autocapitalize="none"
              spellcheck="false"
              :disabled="isSubmitting"
              placeholder="e.g. yourname@gmail.com" 
            />
          </div>
          
          <div class="form-group">
            <label for="subject">Subject <span class="required">*</span></label>
            <input 
              type="text" 
              id="subject" 
              v-model="formData.subject" 
              required 
              maxlength="150"
              :disabled="isSubmitting"
              placeholder="Project Inquiry / Job Opportunity" 
            />
          </div>
          
          <div class="form-group">
            <label for="message">Message <span class="required">*</span></label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              required 
              maxlength="3000"
              rows="5"
              :disabled="isSubmitting"
              placeholder="Hi Kheang Ann, I'd like to talk about a project or collaboration..."
            ></textarea>
          </div>
          
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span v-if="!isSubmitting" class="btn-content">
              <span>Send Message</span>
              <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </span>
            <span v-else class="btn-content loading">
              <svg class="spinner" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle class="spinner-track" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
                <path class="spinner-head" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Sending...</span>
            </span>
          </button>
          
          <transition name="fade">
            <div 
              v-if="formStatus" 
              :class="['form-status', formStatus.type]" 
              role="alert" 
              aria-live="polite"
            >
              <svg v-if="formStatus.type === 'success'" class="status-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <svg v-else class="status-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>{{ formStatus.message }}</span>
            </div>
          </transition>
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
import { ref, onUnmounted } from 'vue';
import emailjs from '@emailjs/browser';
import { profileData, socialLinks } from '../data/mockData.js';

const profile = profileData;

// EmailJS Environment Variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// Honeypot spam trap
const honeypot = ref('');

// Copy email to clipboard state
const copied = ref(false);
let copyTimeout = null;

const copyEmailToClipboard = async () => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(profile.email);
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = profile.email;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    
    copied.value = true;
    if (copyTimeout) clearTimeout(copyTimeout);
    copyTimeout = setTimeout(() => {
      copied.value = false;
    }, 2500);
  } catch (err) {
    console.error('Failed to copy email: ', err);
  }
};

const isSubmitting = ref(false);
const formStatus = ref(null);
let statusTimeout = null;
let lastSubmitTimestamp = 0;

const clearStatusTimer = () => {
  if (statusTimeout) {
    clearTimeout(statusTimeout);
    statusTimeout = null;
  }
};

const setStatus = (type, message, duration = 6000) => {
  clearStatusTimer();
  formStatus.value = { type, message };
  if (duration > 0) {
    statusTimeout = setTimeout(() => {
      formStatus.value = null;
    }, duration);
  }
};

// Clean up timers on component unmount
onUnmounted(() => {
  clearStatusTimer();
  if (copyTimeout) clearTimeout(copyTimeout);
});

// Smart Email Validation with Typo Detection & Domain Verification
const validateEmail = (email) => {
  // 1. Basic structural syntax check
  const basicEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,18}$/;
  if (!basicEmailRegex.test(email)) {
    return { valid: false, message: 'Please provide a valid email address (e.g. yourname@gmail.com).' };
  }

  // Split username and domain
  const parts = email.split('@');
  if (parts.length !== 2) {
    return { valid: false, message: 'Please provide a valid email address.' };
  }

  const [user, domain] = parts;

  // Check for forbidden consecutive dots or invalid punctuation
  if (user.includes('..') || domain.includes('..') || user.startsWith('.') || user.endsWith('.') || domain.startsWith('.') || domain.endsWith('.')) {
    return { valid: false, message: 'Email address contains invalid consecutive dots or misplaced periods.' };
  }

  const domainLower = domain.toLowerCase();

  // 2. Common Top-Level Domain (TLD) typos (e.g. .commm, .con, .cpm, .coom)
  const malformedTLDs = ['.commm', '.comm', '.coom', '.con', '.cpm', '.cmo', '.cpm', '.c0m', '.og', '.ne'];
  for (const typo of malformedTLDs) {
    if (domainLower.endsWith(typo)) {
      return { valid: false, message: `Typo detected in email ending "${typo}". Did you mean .com?` };
    }
  }

  // 3. Gmail domain typo detection (e.g. gmail.commm, gamil.com, gmial.com, gmai.com)
  if (domainLower.startsWith('gamil.') || domainLower.startsWith('gmial.') || domainLower.startsWith('gmaill.') || domainLower.startsWith('gmai.')) {
    return { valid: false, message: `Typo detected in "${domain}". Did you mean @gmail.com?` };
  }

  if (domainLower.startsWith('gmail.')) {
    const tld = domainLower.slice(6); // part after 'gmail.'
    // Common mistakes after gmail.
    if (['commm', 'comm', 'con', 'cpm', 'coom', 'cm', 'c0m'].includes(tld)) {
      return { valid: false, message: `Typo in Gmail extension (.${tld}). Did you mean @gmail.com?` };
    }
    // Standard Gmail domains are only .com (or rarely googlemail.com)
    if (tld !== 'com') {
      return { valid: false, message: `Invalid Gmail domain ending (.${tld}). Standard Gmail addresses must end with @gmail.com` };
    }
  }

  // 4. Other popular provider typos (Yahoo, Outlook, Hotmail, iCloud)
  if (domainLower.startsWith('yahoo.') && domainLower !== 'yahoo.com' && !domainLower.startsWith('yahoo.co.')) {
    return { valid: false, message: `Typo detected in Yahoo domain. Did you mean @yahoo.com?` };
  }
  if (domainLower.startsWith('hotmial.') || domainLower.startsWith('hotmai.')) {
    return { valid: false, message: `Typo detected in domain. Did you mean @hotmail.com?` };
  }
  if (domainLower.startsWith('outlok.') || domainLower.startsWith('outluk.')) {
    return { valid: false, message: `Typo detected in domain. Did you mean @outlook.com?` };
  }
  if (domainLower.startsWith('iclod.') || domainLower.startsWith('icoud.')) {
    return { valid: false, message: `Typo detected in domain. Did you mean @icloud.com?` };
  }

  return { valid: true };
};

const handleSubmit = async () => {
  if (isSubmitting.value) return;

  // Bot detection: If the honeypot field is filled, silently simulate success
  if (honeypot.value.trim() !== '') {
    setStatus('success', 'Thank you! Your message has been sent successfully.');
    formData.value = { name: '', email: '', subject: '', message: '' };
    return;
  }

  // Rate Limiting / Cooldown (minimum 10 seconds between submissions)
  const now = Date.now();
  if (now - lastSubmitTimestamp < 10000) {
    setStatus('error', 'Please wait a few seconds before sending another message.');
    return;
  }

  // Sanitize & Trim inputs
  const name = formData.value.name.trim();
  const rawEmail = formData.value.email.trim();
  const email = rawEmail.toLowerCase();
  const subject = formData.value.subject.trim();
  const message = formData.value.message.trim();

  // Client-side Validation
  if (!name || name.length < 2) {
    setStatus('error', 'Please enter your name (at least 2 characters).');
    return;
  }

  const emailCheck = validateEmail(email);
  if (!email || !emailCheck.valid) {
    setStatus('error', emailCheck.message || 'Please provide a valid email address (e.g. yourname@gmail.com).');
    return;
  }

  if (!subject || subject.length < 2) {
    setStatus('error', 'Please provide a subject for your message.');
    return;
  }

  if (!message || message.length < 5) {
    setStatus('error', 'Please enter a message (at least 5 characters).');
    return;
  }

  // Check if EmailJS environment variables are configured
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.error(
      'EmailJS Error: Missing environment variables in .env file or production deployment settings.'
    );
    setStatus(
      'error',
      `The contact form service is currently not configured. Please email me directly at ${profile.email}.`
    );
    return;
  }

  isSubmitting.value = true;
  formStatus.value = null;

  try {
    // Send email via EmailJS with full parameter mappings to support any template setup
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: name,
        from_name: name,
        email: email,
        from_email: email,
        reply_to: email, // Direct 1-click reply in owner's inbox (e.g. Gmail)
        subject: subject,
        title: subject,
        message: message,
        time: new Date().toLocaleString(),
        to_name: profile.name || 'Kheang Ann'
      },
      EMAILJS_PUBLIC_KEY
    );

    lastSubmitTimestamp = Date.now();

    setStatus(
      'success',
      'Thank you! Your message has been sent successfully. I will get back to you soon!'
    );

    // Reset form fields
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  } catch (error) {
    console.error('EmailJS submission error:', error);
    setStatus(
      'error',
      `Oops! Something went wrong while sending your message. Please try again or reach out to me directly at ${profile.email}`
    );
  } finally {
    isSubmitting.value = false;
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
  grid-template-columns: 1fr 1.15fr;
  gap: 4rem;
  margin-bottom: 4rem;
  align-items: start;
}

.contact-text .intro {
  color: #8892b0;
  line-height: 1.8;
  margin-bottom: 1.75rem;
  font-size: 1.1rem;
}

/* Direct Email Card with Copy button */
.direct-email-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.email-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #64ffda;
  font-size: 1.15rem;
  font-weight: 500;
  text-decoration: none;
  border: 2px solid #64ffda;
  padding: 0.85rem 1.4rem;
  border-radius: 8px;
  background: rgba(100, 255, 218, 0.03);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.email-icon {
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.email-link:hover {
  background: rgba(100, 255, 218, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(100, 255, 218, 0.18);
}

.email-link:hover .email-icon {
  transform: scale(1.1);
}

.copy-email-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #112240;
  color: #8892b0;
  border: 1px solid #233554;
  padding: 0.9rem 1.1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.copy-email-btn:hover {
  border-color: #64ffda;
  color: #64ffda;
  background: #152b52;
  transform: translateY(-2px);
}

.copied-icon {
  color: #64ffda;
}

.contact-cta p {
  color: #ccd6f6;
  font-size: 1.15rem;
  font-weight: 600;
}

.contact-form {
  background: #112240;
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid #233554;
  box-shadow: 0 15px 35px rgba(2, 12, 27, 0.4);
}

/* Honeypot field hidden from users & screen readers */
.honeypot-field {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
  pointer-events: none;
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

.required {
  color: #64ffda;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.9rem 1.2rem;
  background: #0a192f;
  border: 1px solid #233554;
  border-radius: 6px;
  color: #ccd6f6;
  font-size: 1rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #64ffda;
  background: #0d1e38;
  box-shadow: 0 0 15px rgba(100, 255, 218, 0.18);
}

.form-group input:disabled,
.form-group textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #5d6c8e;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: transparent;
  color: #64ffda;
  border: 2px solid #64ffda;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-content {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.btn-icon {
  transition: transform 0.3s ease;
}

.submit-btn:hover:not(:disabled) .btn-icon {
  transform: translateX(4px) translateY(-2px);
}

.submit-btn:hover:not(:disabled) {
  background: rgba(100, 255, 218, 0.12);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(100, 255, 218, 0.2);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Loading Spinner */
.spinner {
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

.spinner-track {
  opacity: 0.25;
}

.spinner-head {
  opacity: 0.85;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Status Notifications */
.form-status {
  margin-top: 1.25rem;
  padding: 0.9rem 1.2rem;
  border-radius: 6px;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.status-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.form-status.success {
  background: rgba(100, 255, 218, 0.12);
  color: #64ffda;
  border: 1px solid rgba(100, 255, 218, 0.4);
}

.form-status.error {
  background: rgba(255, 100, 100, 0.12);
  color: #ff7b7b;
  border: 1px solid rgba(255, 100, 100, 0.4);
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
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
    font-size: 1.05rem;
    padding: 0.8rem 1.2rem;
  }

  .contact-form {
    padding: 1.8rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.3rem;
  }

  .direct-email-card {
    flex-direction: column;
    align-items: stretch;
  }

  .email-link {
    justify-content: center;
  }

  .copy-email-btn {
    justify-content: center;
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

import { test, expect } from '@playwright/test';

test.describe('Portfolio Page Overview & Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the homepage and display correct title and header', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Kheang Ann.*Software Engineering/i);

    // Check Hero section displays developer name
    const heroName = page.locator('.hero .name');
    await expect(heroName).toBeVisible();
    await expect(heroName).toContainText('Kheang Ann');
  });

  test('should contain valid Open Graph (OG) and Twitter card meta tags', async ({ page }) => {
    // Verify Open Graph tags
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /Kheang Ann/i);
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'website');
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /og-image\.jpg/i);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /Building the Future/i);

    // Verify Twitter Card tags
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute('content', /og-image\.jpg/i);
  });

  test('should navigate to sections when clicking navbar links', async ({ page }) => {
    const menuToggle = page.locator('.menu-toggle');
    
    // If mobile menu toggle is visible, open it first
    if (await menuToggle.isVisible()) {
      await menuToggle.click();
    }

    // Check navigation items exist and are accessible
    const navLinks = page.locator('.nav-links a');
    await expect(navLinks.first()).toBeVisible();

    // Verify sections exist on the page
    await expect(page.locator('#about')).toBeAttached();
    await expect(page.locator('#skills')).toBeAttached();
    await expect(page.locator('#projects')).toBeAttached();
    await expect(page.locator('#experience')).toBeAttached();
    await expect(page.locator('#contact')).toBeAttached();
  });

  test('should display project details and technologies', async ({ page }) => {
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeVisible();

    // Verify project cards are rendered
    const projectCards = page.locator('.project-card, .project-item, .project-row, .featured-project');
    await expect(projectCards.first()).toBeVisible();
  });

  test('should display social links in footer and contact', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    const socialLinks = page.locator('.social-links a');
    await expect(socialLinks.first()).toBeVisible();
  });
});

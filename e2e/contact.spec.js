import { test, expect } from '@playwright/test';

test.describe('Contact Section & Email Validation E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#contact');
    await page.locator('#contact').scrollIntoViewIfNeeded();
  });

  test('should render contact form elements correctly', async ({ page }) => {
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#subject')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
    await expect(page.locator('.submit-btn')).toBeVisible();
  });

  test('should copy owner email address to clipboard on button click', async ({ page, context }) => {
    // Grant clipboard permissions
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);

    const copyBtn = page.locator('.copy-email-btn');
    await expect(copyBtn).toBeVisible();
    await copyBtn.click();

    // Verify button text changes to "Copied!"
    await expect(copyBtn).toContainText('Copied!');
  });

  test('should block invalid email typos like "dana@gmail.commm" and show helpful error', async ({ page }) => {
    await page.fill('#name', 'Dana Test');
    await page.fill('#email', 'dana@gmail.commm');
    await page.fill('#subject', 'Test Project Inquiry');
    await page.fill('#message', 'Hello Kheang Ann, this is a test message to verify email validation.');

    await page.click('.submit-btn');

    // Verify the error alert appears with the specific typo explanation
    const statusAlert = page.locator('.form-status.error');
    await expect(statusAlert).toBeVisible();
    await expect(statusAlert).toContainText('.commm');
  });

  test('should block misspelled domain like "user@gamil.com"', async ({ page }) => {
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'user@gamil.com');
    await page.fill('#subject', 'Collaboration');
    await page.fill('#message', 'Hello, I want to discuss a project with you.');

    await page.click('.submit-btn');

    const statusAlert = page.locator('.form-status.error');
    await expect(statusAlert).toBeVisible();
    await expect(statusAlert).toContainText('Did you mean @gmail.com?');
  });

  test('should block short messages (< 5 characters)', async ({ page }) => {
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john.doe@gmail.com');
    await page.fill('#subject', 'Hi');
    await page.fill('#message', 'Hi');

    await page.click('.submit-btn');

    const statusAlert = page.locator('.form-status.error');
    await expect(statusAlert).toBeVisible();
    await expect(statusAlert).toContainText('at least 5 characters');
  });

  test('should trigger honeypot bot protection silently without crashing', async ({ page }) => {
    // Fill the hidden honeypot input simulating a bot
    const honeypot = page.locator('input[name="_gotcha"]');
    await honeypot.evaluate((el) => {
      el.value = 'spam bot payload';
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });

    await page.fill('#name', 'Spam Bot');
    await page.fill('#email', 'bot@spammer.com');
    await page.fill('#subject', 'Spam Offer');
    await page.fill('#message', 'Buy our products now with discount!');

    await page.click('.submit-btn');

    // Honeypot traps bot and returns success message without sending email
    const statusAlert = page.locator('.form-status.success');
    await expect(statusAlert).toBeVisible();
  });
});

import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport size
  await page.setViewport({ width: 1280, height: 800 });

  // Navigate to the local development server
  await page.goto('http://localhost:5173');

  // Wait for the page to fully load
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Take a screenshot
  await page.screenshot({
    path: path.join(__dirname, 'screenshot.png'),
    fullPage: false
  });

  console.log('Screenshot saved as screenshot.png');

  // Close the browser
  await browser.close();
})();

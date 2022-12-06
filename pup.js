// A Silly Script to Open ChatGPT from a puppet browser

import puppeteer from 'puppeteer';


(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
  
    await page.goto('https://chat.openai.com/chat');


    await browser.close();
})();
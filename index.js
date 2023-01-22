const puppeteer = require('puppeteer');
const continueButton =document.querySelector(".button-continue");
(async () => {
 
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto("http://app-staging.youshd.com/");

  await page.screenshot({path:"example.png"});
  await page.click(continueButton);
  const country =await page.waitForXPath(`//img[@name="phoneNo"]`)
  console.log(country)
  await page.screenshot({path:"example2.png"});
  
  // Test the background page as you would any other page.
  await browser.close();
})();
import { test } from '@playwright/test';

test.describe('@smoke Test Group', () => {

    test.beforeEach(async({page}) => {
      await  page.goto('https://practice.cydeo.com/');
    
        
    });
  test('Getting the title of the page', async ({ page }) => {
   let actualTitle= await page.title(); 
   console.log(`Page title: ${actualTitle}`); // Output: Page title: Example Domain
  });

  test('Getting the URL of the page', async ({ page }) => {
       let actualURL=page.url(); 
       console.log(`Page URL: ${actualURL}`); // Output: Page URL: https://practice.cydeo.com/
  });

  
});
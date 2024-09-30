import {test} from '@playwright/test';
test('youtube Search', async ({page}) => {
    await page.goto('https://www.youtube.com/');
    await page.getByLabel('Accept the use of cookies and other data for the purposes described').click();
    let searchbox=page.locator("//input[@id='search']");
    await searchbox.click();

    await page.getByPlaceholder('Search').fill('Cydeo');
   
    await searchbox.press('Enter');
  
    let firstResult=page.locator("(//a[@id='video-title'])[1]");

    await firstResult.click();  
    await page.waitForTimeout(3000);  //await page.locator('#media-container-link #thumbnail-container').click();
    //await page.getByLabel('Pause keyboard shortcut k').click();*/
  
});
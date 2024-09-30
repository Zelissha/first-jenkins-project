import {expect, test} from '@playwright/test';

test('@smoke Getting the title of the page', async ({page}) => {
    await page.goto('https://practice.cydeo.com/');
    const Actualtitle = await page.title();
    console.log(`Page title: ${Actualtitle}`); // Output: Page title: Example Domain
    let ExpectedTitle = 'Practice';
expect(Actualtitle).toBe(ExpectedTitle);

});

test('Getting the URL of the page', async ({page}) => {
await page.goto('https://practice.cydeo.com/');

let ActualURL =page.url();
console.log(`Page URL: ${ActualURL}`); // Output: Page URL: https://practice.cydeo.com/

});

test('set the window size', async ({page}) => {
    await page.goto('https://practice.cydeo.com/');
    await page.setViewportSize({ width: 800, height: 2000 });
  
    //let ActualSize = await page.viewportSize();
    //console.log(`Actual viewport size: ${ActualSize.width}x${ActualSize.height}`); // Output: Actual viewport size: 800x600
});
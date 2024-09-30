import {test} from '@playwright/test';

test.describe('Test Group', () => {

    //create a before each test hook
test.beforeEach(async ({page}) => {
page.goto('https://practice.cydeo.com/');



});

  test('ceck() checks the radio buttons and checkboxes if theyhave non been checked yet', async ({ page }) => {
   let checkboxesLink =page.locator("text='Checkboxes'");
   await checkboxesLink.click();

   let checkbox1 = page.locator("#box1");
   
   await checkbox1.check();
   

  });

  test('unchecked() unchecks the radio buttons and checkboxes if they have not ben unchecked yet', async ({ page }) => {
    let checkboxesLink =page.locator("text='Checkboxes'");
    await checkboxesLink.click();
    
    let checkbox2 = page.locator("#box2");
 
    await checkbox2.uncheck();
  
  
  });

  //Dropdownu 3 sekilde secebiliriz value visible text and index
  test('selectOption() used for dropdowns', async ({ page }) => {

    let dropdownLink = page.locator("text='Dropdown'");
     await dropdownLink.click();
    
    let simpleDropdown= page.locator("//select[@id='dropdown']");
 
    await simpleDropdown.selectOption({ value: '2'});



     
    
  });


//create an empty test
test('innerText() retrive the visible text', async ({ page }) => {
   let headerElement= page.locator("//span[@class='h1y']");

   
   let actualText= await headerElement.innerText();
   console.log(`Actual text: ${actualText}`); // Output: Actual text: Practice
  
});
//create an empty test

test('imputValue(): only works with <imput>, <textarea>,<select> ', async ({ page }) => {

page.getByText("input").click();

let inputBox=page.locator("//input[@type='number']");
await inputBox.fill("30");
let inputValue=await inputBox.inputValue();
console.log(`Input value: ${inputValue}`); // Output: Input value: 30


});


});
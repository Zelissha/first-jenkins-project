import {test} from '@playwright/test';

// test group code tekrarina dusmemzi engeller.ayrica bu sayede before all yada after
//all gibi functionlari kullanablrz.
test.describe('Test Group1', () => {

    test.beforeAll(async () => {
        console.log('Before All Test Cases');
    });
    test.beforeEach(async () => {
        console.log('Before Each Test Case');
    });

    test.afterAll(async () => {
        console.log('After All Test Cases');
    });

test('Test Case1', async ({page}) => {
    console.log('Test Case1');
});

test('Test Case2', async ({page}) => {
    console.log('Test Case2');
});

test('Test Case3', async ({page}) => {
    console.log('Test Case3');
});


});
Feature('LambdaTest Selenium Playground Tests');

Scenario('Validate Simple Form Demo', async ({ I }) => {
    I.amOnPage('https://www.lambdatest.com/selenium-playground');
    I.click('text=Simple Form Demo');
    I.seeInCurrentUrl('simple-form-demo');
    I.waitForElement('#user-message', 6);
    I.seeCurrentUrlEquals('https://www.lambdatest.com/selenium-playground/simple-form-demo');

    const message = 'Welcome to LambdaTest';
    I.fillField('#user-message', message);
    I.click('#showInput');
    I.wait(5); // wait for 5 seconds
    I.see(message, '#message');
});

Scenario('Validate Drag & Drop Slider', async ({ I }) => {
    I.amOnPage('https://www.lambdatest.com/selenium-playground');
    I.click('text=Drag & Drop Sliders');

    I.executeScript(() => {
        const slider = document.querySelector('input.sp__range');
        slider.value = 95;
        slider.dispatchEvent(new Event('input'));
        const output = document.querySelector('#rangeSuccess');
        output.textContent = '95';
    });

    I.wait(2);
    I.see('95', '#rangeSuccess');
});


Scenario('Validate Input Form Submission and Success Message', async ({ I }) => {
    I.amOnPage('https://www.lambdatest.com/selenium-playground');
    I.click('text=Input Form Submit');
    I.handleDialog('Please fill in the fields');

    // Continue filling the form
    I.fillField('#name', 'John Doe');
    I.fillField('#inputEmail4', 'johndoe@example.com');
    I.fillField('#inputPassword4', 'password123');
    I.fillField('#company', 'ABC LTD.');
    I.fillField('#websitename', 'https://www.johndoe.com');
    I.selectOption('select[name="country"]', 'United States');
    I.fillField('#inputCity', 'New York');
    I.fillField('#inputAddress1', '123 Main Street');
    I.fillField('#inputAddress2', 'Suite 456');
    I.fillField('#inputState', 'New York');
    I.fillField('#inputZip', '10001');

    // Submit again after filling the form
    I.click('button.selenium_btn');

    // Verify success message
    I.see('Thanks for contacting us, we will get back to you shortly.', '.success-msg');
});


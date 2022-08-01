Feature('login_form');

Scenario('test something', ({ I }) => {
    // const blueCheckbox =  "//div[@id='uniform-id_gender2']"
    I.amOnPage('/');
    I.click('Sign in');
    I.fillField({css: 'input[id=email_create]'},'Anuj@Anuj.com');
    I.click('Create an account');
    I.wait(3);
    I.checkOption('//input[@id="id_gender1"]');
    I.wait(1);
    I.fillField('//input[@id="customer_firstname"]', 'Anuj');
    I.wait(1);
    I.fillField('//input[@id="customer_lastname"]', 'Tiwari');
    I.wait(1);
    I.fillField('//input[@id="passwd"]', 'ABCD');
    I.wait(20);
});

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
    I.fillField('//input[@id="passwd"]', 'ABCD@123');
    I.wait(1);
    I.selectOption({css: 'select[id=days]'},"17");
    I.wait(1);
    I.selectOption({css: 'select[id=months]'},"7");
    I.wait(1);
    I.selectOption({css: 'select[id=years]'},"1997");
    I.wait(1);
    I.checkOption('#newsletter');
    I.wait(1);
    I.checkOption('#optin');
    I.wait(1);
    I.fillField('//input[@id="address1"]','Farshi Stop');
    I.wait(1);
    I.fillField('//input[@id="address2"]','V M Height');
    I.wait(1);
    I.fillField('//input[@id="city"]','Amravati');
    I.wait(1);
    I.selectOption({css: 'select[id=id_state]'},"New York");
    I.wait(1);
    I.fillField('//input[@id="postcode"]','44460');
    I.wait(1);
    I.selectOption({css: 'select[id=id_country]'},"United States");
    I.wait(1);
    I.fillField('//textarea[@id="other"]','Hey there');
    I.wait(1);
    I.fillField('//input[@id="phone_mobile"]','9192939495');
    I.wait(1);
    I.fillField('//input[@id="alias"]','V M height');
    I.wait(1);
    I.click('Register');
    I.wait(10);
});

Feature('Login');

Scenario('Sukses Login', ({ I }) => {
    I.amOnPage('/')
    I.click('Sign in')
    I.waitForText('Need an account?', 50)
    I.fillField({css:'input[placeholder=Email]'}, 'poiqwe1234524@gmail.com')
    I.fillField({css:'input[placeholder=Password]'}, 'poiqwe123456')
    I.click({css:'button[type=submit]'})
    I.see('richirin')
});

Scenario('Gagal Login', ({ I }) => {
    I.amOnPage('/')
    I.click('Sign in')
    I.waitForText('Need an account?', 50)
    I.fillField({css:'input[placeholder=Email]'}, 'asalin')
    I.fillField({css:'input[placeholder=Password]'}, 'poiqwe123456')
    I.click({css:'button[type=submit]'})
    I.see('email or password is invalid')
});
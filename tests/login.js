Feature('Login');

Scenario('Sukses Login', ({ I }) => {
    // buka homepage
    I.amOnPage('/')
    // click sign in
    I.click('Sign in')
    // verify text
    I.waitForText('Need an account?', process.env.TIMEOUT)
    // mengisi form login
    I.fillField({css:'input[placeholder=Email]'}, 'poiqwe1234524@gmail.com')
    I.fillField({css:'input[placeholder=Password]'}, 'poiqwe123456')
    I.click({css:'button[type=submit]'})
    // verify 
    I.see('richirin')
});

Scenario('Gagal Login', ({ I }) => {
    I.amOnPage('/')
    I.click('Sign in')
    I.waitForText('Need an account?', process.env.TIMEOUT)
    I.fillField({css:'input[placeholder=Email]'}, 'asalin')
    I.fillField({css:'input[placeholder=Password]'}, 'poiqwe123456')
    I.click({css:'button[type=submit]'})
    I.see('email or password is invalid')
});
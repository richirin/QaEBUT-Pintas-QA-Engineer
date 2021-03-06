Feature('Article');

const faker = require('faker');


const articleTitle = faker.lorem.word()
const articleDescription = faker.lorem.words()
const article = faker.lorem.paragraphs()

Scenario('Create Article', ({ I }) => {
    I.login('poiqwe1234524@gmail.com', 'poiqwe123456', 'richirin')
    I.click('New Article')
    I.waitForVisible({css:'input[formcontrolname=title]'}, 50)
    I.fillField({css:'input[formcontrolname=title]'}, articleTitle)
    I.fillField({css:'input[formcontrolname=description]'}, articleDescription)
    I.fillField({css:'textarea[formcontrolname=body]'}, article)
    I.click({css:'button[type=button]'})
    I.waitForText('Edit Article', 50)
});

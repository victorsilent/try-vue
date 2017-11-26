// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Check if searched contact is returned': function test(browser) {

    browser
      .url('http://127.0.0.1:8080/#/search')
      .waitForElementVisible('#app', 5000)
      .setValue('input[name=search]', '2905')
      .click("button[name=search]")
      .pause(2000);

    browser.expect.element('.single-user').to.be.present.before(2000);
  },

  'Check if wrong entry disable search button': function test(browser) {

    browser
      .url('http://127.0.0.1:8080/#/search')
      .waitForElementVisible('#app', 5000)
      .setValue('input[name=search]', 'test')
      .click("button[name=search]")
      .pause(2000);

    //Check if button is disabled
    browser.expect.element('button[name=search]').to.be.not.enabled;
  },

  'Check if contact list is rendered': function test(browser) {

    browser
      .url('http://127.0.0.1:8080/#/')
      .waitForElementVisible('#app', 5000)
      .pause(2000);

    //Check if no one contect is selected at start
    browser.expect.element('#contactNotSelected')
      .text.to.contain('Nenhum usuário selecionado');

    //Check if contact list is present
    browser.expect.element('.contacts-list')
      .to.be.present;
  },

  'Check if user is selected': function test(browser) {

    browser
      .url('http://127.0.0.1:8080/#/')
      .waitForElementVisible('#app', 5000)
      .pause(2000)
      .click(".single-user:first-child")
      .expect.element('#selected-user').to.be.present;
  },
};

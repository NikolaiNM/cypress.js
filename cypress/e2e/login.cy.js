
describe('Тестируем форму Логина', function () {

  it('1 Позитивный кейс авторизации', function () {
       cy.visit('https://login.qa.studio/');                        //окрыть сайт
       cy.get('#loginButton').should('be.disabled');             //Проверям, что кнопка недоступна для нажатия
       cy.get('#mail').type('german@dolnikov.ru');                 // Ввожу логин
       cy.get('#loginButton').should('be.disabled');             //Проверям, что кнопка недоступна для нажатия
       cy.get('#pass').type('iLoveqastudio1');                  // Ввожу пароль
       cy.get('#loginButton').should('be.enabled');             // Проверяем, что кнопака доступна
       cy.get('#loginButton').click();                            //Нажать на кнопку войти
       cy.contains('Авторизация прошла успешно').should('be.visible');      //Сообщение Авторизация прошла успешно
       cy.get('#exitMessageButton').should('be.visible');             //Есит крестик закрыть
  })

  it('2 Логики восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');                        //окрыть сайт
    cy.get('#loginButton').should('be.disabled');             //Проверям, что кнопка недоступна для нажатия
    cy.get('#forgotEmailButton').click();         //Нажать кнопку забыли пароль
    cy.contains('Восстановите пароль').should('be.visible');      //Сообщение Восстановите пароль существует
    cy.get('#mailForgot').type('german@dolnikov.ru');         //Ввели существующую почту
    cy.get('#restoreEmailButton').click();
    cy.contains('Успешно отправили пароль на e-mail').should('be.visible');      //Сообщение Успешно отправили пароль на e-mail
    cy.get('#exitMessageButton').should('be.visible');             //Есит крестик закрыть
  })

  it('3 Негативный кейс авторизации', function () {
    cy.visit('https://login.qa.studio/');                        //окрыть сайт
    cy.get('#loginButton').should('be.disabled');             //Проверям, что кнопка недоступна для нажатия
    cy.get('#mail').type('german@dolnikov.ru');                 // Ввожу логин
    cy.get('#loginButton').should('be.disabled');             //Проверям, что кнопка недоступна для нажатия
    cy.get('#pass').type('chepuha');                  // Ввожу пароль
    cy.get('#loginButton').should('be.enabled');             // Проверяем, что кнопака доступна
    cy.get('#loginButton').click();                            //Нажать на кнопку войти
    cy.contains('Такого логина или пароля нет').should('be.visible');      //Сообщение Авторизация прошла успешно
    cy.get('#exitMessageButton').should('be.visible');             //Есит крестик закрыть
  })

  it('4 Негативный кейс авторизации 2', function () {
    cy.visit('https://login.qa.studio/');                        //окрыть сайт
    cy.get('#loginButton').should('be.disabled');             //Проверям, что кнопка недоступна для нажатия
    cy.get('#mail').type('ivan@dolnikov.ru');                 // Ввожу логин
    cy.get('#loginButton').should('be.disabled');             //Проверям, что кнопка недоступна для нажатия
    cy.get('#pass').type('iLoveqastudio1');                  // Ввожу пароль
    cy.get('#loginButton').should('be.enabled');             // Проверяем, что кнопака доступна
    cy.get('#loginButton').click();                            //Нажать на кнопку войти
    cy.contains('Такого логина или пароля нет').should('be.visible');      //Сообщение Авторизация прошла успешно
    cy.get('#exitMessageButton').should('be.visible');             //Есит крестик закрыть
  })

  it('5 Негативный кейс валидации', function () {
    cy.visit('https://login.qa.studio/');                        //окрыть сайт
    cy.get('#loginButton').should('be.disabled');             //Проверям, что кнопка недоступна для нажатия
    cy.get('#mail').type('germandolnikov.ru');                 // Ввожу логин
    cy.get('#loginButton').should('be.disabled');             //Проверям, что кнопка недоступна для нажатия
    cy.get('#pass').type('iLoveqastudio1');                  // Ввожу пароль
    cy.get('#loginButton').should('be.enabled');             // Проверяем, что кнопака доступна
    cy.get('#loginButton').click();                            //Нажать на кнопку войти
    cy.contains('Нужно исправить проблему валидации').should('be.visible');      //Сообщение об ошибке
    cy.get('#exitMessageButton').should('be.visible');             //Есит крестик закрыть
  })

  it('6 Приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');                        //окрыть сайт
    cy.get('#loginButton').should('be.disabled');             //Проверям, что кнопка недоступна для нажатия
    cy.get('#mail').type('GerMan@Dolnikov.ru');                 // Ввожу логин
    cy.get('#loginButton').should('be.disabled');             //Проверям, что кнопка недоступна для нажатия
    cy.get('#pass').type('iLoveqastudio1');                  // Ввожу пароль
    cy.get('#loginButton').should('be.enabled');             // Проверяем, что кнопака доступна
    cy.get('#loginButton').click();                            //Нажать на кнопку войти
    cy.contains('Авторизация прошла успешно').should('be.visible');      //Сообщение Авторизация прошла успешно
    cy.get('#exitMessageButton').should('be.visible');             //Есит крестик закрыть
  })
})


describe('Тестируем покемонов', function () {

  it('1 Позитивный кейс авторизации', function () {
    cy.visit('https://pokemonbattle.me/');                        //окрыть сайт
    cy.get(':nth-child(1) > .auth__input').type('testpokepoke@mail.ru')
    cy.get('#password').type('7ZyUsMx6?');
    cy.get('.auth__button').click();
    cy.get('.header__btns > [href="/shop"]').click();
    cy.get(':nth-child(1) > .shop__button').click();
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('0000000000000000');
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Testting Pokemons');
    cy.get('.pay-btn').click();
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__submit-button').click();
    cy.get('.payment__adv').click();
  })

  it('1 Позитивный кейс авторизации', function () {
    cy.visit('https://pokemonbattle.me/');                        //окрыть сайт
    cy.get(':nth-child(1) > .auth__input').type('testpokepoke@mail.ru')
    cy.get('#password').type('7ZyUsMx6?');
    cy.get('.auth__button').click();
    cy.get('.header__btns > [href="/shop"]').click();
    cy.get(':nth-child(2) > .shop__button').click();
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('0000000000000000');
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Testting Pokemons');
    cy.get('.pay-btn').click();
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__submit-button').click();
    cy.get('.payment__adv').click();
  })
})


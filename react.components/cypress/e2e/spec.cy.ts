/// <reference types="cypress" />
// @ts-check

describe('Links', () => {
  it('checks About link works', () => {
    // Given
    cy.visit('/');

    // When
    cy.get('.header__link').contains('about').click();

    // Then
    cy.url().should('include', '/about');
    cy.get('.about__title').contains('Elijah Ivanik');
  });

  it('checks Create link works', () => {
    // Given
    cy.visit('/');

    // When
    cy.get('.header__link').contains('create').click();

    // Then
    cy.url().should('include', '/create');
    cy.get('.image-label').contains('no image atteched');
  });

  it('checks 404 link works', () => {
    // Given
    cy.visit('/');

    // When
    cy.get('.header__link').contains('404').click();

    // Then
    cy.url().should('include', '/no_page_here');
    cy.get('.error__block').find('img').should('have.attr', 'src').should('include', '/404');
  });

  it('checks Main link works', () => {
    // Given
    cy.visit('/');

    // When
    cy.get('.header__link').contains('404').click();
    cy.get('.header__link').contains('main').click();

    // Then
    cy.get('.page__title').contains('main page');
  });

  it('checks About component', () => {
    // Given
    cy.visit('/about');

    // Then
    cy.get('.about__title').contains('Elijah Ivanik');
  });

  it('checks Search component', () => {
    // Given
    cy.visit('/');

    // When
    cy.get('.search__input').type('zz');
    cy.get('.search__button').click();

    // Then
    cy.get('.card__title').first().contains('Izzy');

    // Then When
    cy.get('.icon--drop').click();

    // Then Then
    cy.get('.card__title').first().contains('Rick');
  });

  it('checks Create component', () => {
    // Given
    cy.visit('/create');

    // Start with
    cy.get('.cards__null').contains('no');

    // When
    cy.get('input[name="title"]').type('title');
    cy.get('input[name="tags"]').type('tags');
    cy.get('input[name="date"]').type('2020-05-12');
    cy.get('select').select('photo');
    cy.get('[type="file"]').attachFile('test.jpg');
    cy.get('label').eq(0).click();
    cy.get('label').eq(1).click();
    cy.get('[type="submit"]').click();

    // Then
    cy.get('.card__title').contains('title');
    cy.get('.popup__content').contains('successfully');

    // Finally
    cy.get('.popup__content').should('not.exist');
  });

  it('checks Create component errors', () => {
    // Given
    cy.visit('/create');

    // When
    cy.get('[type="submit"]').click();

    // Then
    cy.get('.input__label--error').eq(0).contains('required');
  });

  it('checks Pagination', () => {
    // Given
    cy.visit('/');

    // When
    cy.get('.page').eq(1).click();

    // Then
    cy.get('.card__title').first().contains('Aqua Morty');
  });

  it('checks Popup', () => {
    // Given
    cy.visit('/');

    // When
    cy.get('.card').eq(0).click();

    // Then
    cy.get('.card__info b').contains('Human');

    // After
    cy.get('.popup__close').click();

    // Finally
    cy.get('.popup__close').should('not.exist');
  });

  it('Does not do much', () => {
    expect(true).to.equal(true);
  });
});

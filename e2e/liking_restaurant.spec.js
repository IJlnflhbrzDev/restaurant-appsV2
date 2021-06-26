/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('liking restaurant');

Before(({ I }) => {
     I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
     I.seeElement('#query');
     I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
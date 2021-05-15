/* eslint-disable import/prefer-default-export */
import { CardHtml } from '../views/templates/template-html';

fetch('https://restaurant-api.dicoding.dev/list')
  .then((response) => response.json())
  .then((result) => {
    result.restaurants.forEach((items) => {
      const contentMain = document.querySelector('.conten');
      contentMain.innerHTML += CardHtml(items);
    });
  });

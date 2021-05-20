/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import FavoriteRestaurantIdb from '../../data/database';
import { restoTemplate } from '../templates/template-html';

const favoriteResto = {
  async render() {
    return `
      <div class="content">
           <h2 class="content__heading">You like Favorite Resto </h2>
           <div id="resto" class="resto">
           </div>
     </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllResto();
    const restaurantContainer = document.querySelector('#resto');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += restoTemplate(restaurant);
    });
  },
};

export default favoriteResto;

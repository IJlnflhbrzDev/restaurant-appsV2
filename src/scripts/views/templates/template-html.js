/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */

import CONFIG from '../../globals/config';

const restoTemplate = (resto) => {
  return `
     <article>
                    <div class="card">
                         <img src=${CONFIG.SMALL_IMAGE_URL(
                           resto.pictureId
                         )}  class="card-img" alt=${resto.name}>
                         <div class="card-lokasi">
                              <h3>Kota,${resto.city}</h3>
                         </div>
                         <div class="card-body">
                              <h4 class="card-rating">Rating ${
                                resto.rating
                              }</h4>
                              <h5 class="card-title"><a href="${`/#/detail/${resto.id}`}" aria-label="nama restoran click jika anda ingin melihat lebih detail ">${
    resto.name
  }</a></h5>
                              <p class="card-text">${resto.description}</p>
                              <a class="btn_detail" href="${`/#/detail/${resto.id}`}" aria-label="click untuk melihat detail makanan">Detail</a>
                         </div>
                    </div>
     </article>

     `;
};

const RestoDetailTemplate = (resto) => {
  return `

     <article>
          <div>
                    <h1>${resto.name}</h1>
                    <h2>${resto.id}</h2>
          </div>
     </article>


     `;
};

export { restoTemplate, RestoDetailTemplate };

/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
/* eslint-disable import/named */
/* eslint-disable comma-dangle */
import UrlParser from '../../routes/url-parser';
import DumyDicodingSource from '../../data/dumy.-dicoding';
import { RestoDetailTemplate } from '../templates/template-html';
import LikeButtonInitiator from '../../globals/like-btn-initiator';

/* eslint-disable no-unused-vars */
const detailResto = {
  async render() {
    return `
        <h2>DETAIL PAGE</h2>
        <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restorantDetail = await DumyDicodingSource.GetDetailRestaurant(
      url.id
    );
    const restoranContainer = document.querySelector('.conten');
    restoranContainer.classList.add('detail-page');
    restoranContainer.innerHTML += RestoDetailTemplate(restorantDetail);

    LikeButtonInitiator.init({
      restaurant: {
        id: restorantDetail.id,
        title: restorantDetail.title,
        overview: restorantDetail.overview,
        backdrop_path: restorantDetail.backdrop_path,
        vote_average: restorantDetail.vote_average,
      },
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
    });
  },
};
console.log(LikeButtonInitiator.init);

export default detailResto;

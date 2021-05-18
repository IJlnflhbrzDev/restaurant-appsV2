/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
/* eslint-disable import/named */
/* eslint-disable comma-dangle */
import UrlParser from '../../routes/url-parser';
import DumyDicodingSource from '../../data/dumy.-dicoding';
import { RestoDetailTemplate } from '../templates/template-html';

/* eslint-disable no-unused-vars */
const detailResto = {
  async render() {
    return `

    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restorantDetail = await DumyDicodingSource.GetDetailRestaurant(
      url.id
    );
    const restoranContainer = document.querySelector('.detail-conten');
    restoranContainer.innerHTML += RestoDetailTemplate(restorantDetail);
    console.log(restorantDetail);
  },
};

export default detailResto;

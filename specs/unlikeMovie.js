/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import LikeButtonInitiator from '../src/scripts/globals/like-btn-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/database';

const addLikeButtonContainer = () => {
     document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Movie', () => {
     beforeEach(async () => {
          addLikeButtonContainer();
          await FavoriteRestaurantIdb.putMovie({ id: 1 });
     });

     afterEach(async () => {
          await FavoriteRestaurantIdb.deleteMovie(1);
     });

     it('should display unlike widget when the movie has been liked', async () => {
          await LikeButtonInitiator.init({
               likeButtonContainer: document.querySelector('#likeButtonContainer'),
               movie: {
                    id: 1,
               },
          });

          expect(document.querySelector('[aria-label="unlike this movie"]'))
               .toBeTruthy();
     });

     it('should not display like widget when the movie has been liked', async () => {
          await LikeButtonInitiator.init({
               likeButtonContainer: document.querySelector('#likeButtonContainer'),
               movie: {
                    id: 1,
               },
          });

          expect(document.querySelector('[aria-label="like this movie"]'))
               .toBeFalsy();
     });

     it('should be able to remove liked movie from the list', async () => {
          await LikeButtonInitiator.init({
               likeButtonContainer: document.querySelector('#likeButtonContainer'),
               movie: {
                    id: 1,
               },
          });

          document.querySelector('[aria-label="unlike this movie"]').dispatchEvent(new Event('click'));

          expect(await FavoriteRestaurantIdb.getAllMovies()).toEqual([]);
     });

     it('should not throw error if the unliked movie is not in the list', async () => {
          await LikeButtonInitiator.init({
               likeButtonContainer: document.querySelector('#likeButtonContainer'),
               movie: {
                    id: 1,
               },
          });

          // hapus dulu film dari daftar film yang disukai
          await FavoriteRestaurantIdb.deleteMovie(1);

          // kemudian, simulasikan pengguna menekan widget batal menyukai film
          document.querySelector('[aria-label="unlike this movie"]').dispatchEvent(new Event('click'));

          expect(await FavoriteRestaurantIdb.getAllMovies()).toEqual([]);
     });
});
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import LikeButtonInitiator from '../src/scripts/globals/like-btn-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/database';

describe('Liking A Movie', () => {
     const addLikeButtonContainer = () => {
          document.body.innerHTML = '<div id="likeButtonContainer"></div>';
     };

     beforeEach(() => {
          addLikeButtonContainer();
     });

     it('should show the like button when the movie has not been liked before', async () => {
          await LikeButtonInitiator.init({
               likeButtonContainer: document.querySelector('#likeButtonContainer'),
               movie: {
                    id: 1,
               },
          });

          expect(document.querySelector('[aria-label="like this movie"]')).toBeTruthy();
     });

     it('should not show the unlike button when the movie has not been liked before', async () => {
          await LikeButtonInitiator.init({
               likeButtonContainer: document.querySelector('#likeButtonContainer'),
               movie: {
                    id: 1,
               },
          });

          expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
     });

     it('should be able to like the movie', async () => {
          await LikeButtonInitiator.init({
               likeButtonContainer: document.querySelector('#likeButtonContainer'),
               movie: {
                    id: 1,
               },
          });

          document.querySelector('#likeButton').dispatchEvent(new Event('click'));
          const movie = await FavoriteRestaurantIdb.getMovie(1);

          expect(movie).toEqual({ id: 1 });

          FavoriteRestaurantIdb.deleteMovie(1);
     });

     it('should not add a movie again when its already liked', async () => {
          await LikeButtonInitiator.init({
               likeButtonContainer: document.querySelector('#likeButtonContainer'),
               movie: {
                    id: 1,
               },
          });

          // Tambahkan film dengan ID 1 ke daftar film yang disukai
          await FavoriteRestaurantIdb.putMovie({ id: 1 });
          // Simulasikan pengguna menekan tombol suka film
          document.querySelector('#likeButton').dispatchEvent(new Event('click'));
          // tidak ada film yang ganda
          expect(await FavoriteRestaurantIdb.getAllMovies()).toEqual([{ id: 1 }]);

          FavoriteRestaurantIdb.deleteMovie(1);
     });

     // menggunakan metode xit, bukan it
     xit('should not add a movie when it has no id', async () => {
          await LikeButtonInitiator.init({
               likeButtonContainer: document.querySelector('#likeButtonContainer'),
               movie: {},
          });

          document.querySelector('#likeButton').dispatchEvent(new Event('click'));

          expect(await FavoriteRestaurantIdb.getAllMovies()).toEqual([]);
     });
     // eslint-disable-next-line eol-last
});
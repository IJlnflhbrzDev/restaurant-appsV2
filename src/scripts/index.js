import 'regenerator-runtime'; /* for async await transpile */
import './data/dumy.-dicoding';
import '../styles/main.css';

const btnNavMobile = document.getElementById('nav-drawwer');
const handleDrawwer = document.querySelector('.header');
const navDrawwerMobile = document.getElementById('nav-drawwer_mobile');

btnNavMobile.addEventListener('click', () => {
  navDrawwerMobile.classList.toggle('show-menu-mobile');
});

handleDrawwer.addEventListener('click', () => {
  navDrawwerMobile.classList.remove('show-menu-mobile');
});

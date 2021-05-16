import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#nav-drawwer'),
  drawer: document.querySelector('#nav-drawwer_mobile'),
  content: document.querySelector('.conten'),
});
console.log(app);

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

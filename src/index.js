import App from './scripts/app';

window.addEventListener('DOMContentLoaded', () => {
  window.app = new App();

  window.addEventListener('resize', window.app.onResize.bind(window.app));
});

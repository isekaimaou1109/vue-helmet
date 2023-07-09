import HelmetComponent from './components/HelmetComponent.vue';

export const HelmetProvider = {
  install(app) {
    app.component('vue-helmet', HelmetComponent);
  }
};
import { MainPage } from './MainPage/MainPage.js';

const app = document.querySelector('#app');

const App = () => MainPage();

app.innerHTML = App();

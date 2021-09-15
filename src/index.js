import './sass/main.scss';

import getRefs from './js/get-refs';
const refs = getRefs();

const API_KEY = '0e03d2359202713e59ab7c25960ab620';
import ApiService from './js/api-service.js';
export const apiService = new ApiService(API_KEY);

import './js/team-modal.js';
import './js/loader.js';
import './js/inputSearch';
import './js/arrowTop';
import getTopMovies from './js/slider';
import showAllert from './js/show-allert';
import openModal from './js/modal';
import createGalleryMarkup from './js/create-gallery-markup.js';
import libraryMarkup from './js/libraryMarkup';
import Pagination from './js/pagination.js';
import openGanresList from './js/genres.js';

getTopMovies();
apiService.getTrendingMovies().then(createGalleryMarkup).catch(showAllert);

const newPagination = new Pagination(apiService);
window.newPagination = newPagination;

refs.library.addEventListener('click', libraryMarkup);
refs.genresList.addEventListener('click', openGanresList);
refs.movies.addEventListener('click', openModal);

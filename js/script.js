import { filterToggle } from './modules/openFilter.js';
import { selectCityControl } from './modules/selectCityControl.js';
import { vacancyControl } from './modules/vacancyControl.js';
import { modalVacancyControl } from './modules/modalVacancyControl.js';
import { filterFormControl } from './modules/filterFormControl.js';
import { formController } from './modules/formController.js';
import { fileController } from './modules/fileController.js';
import { loadMoreVacancies } from './modules/loadMoreVacancies.js';

export const API_URL = 'https://cosmic-motley-bed.glitch.me/';
export const LOCATION_URL = 'api/locations';
export const VACANCY_URL = 'api/vacancy';

export const cardsList = document.querySelector('.cards__list');
export const filterForm = document.querySelector('.filter__form');
export const vacanciesFilterBtn = document.querySelector('.vacancies__filter-btn');
export const vacanciesFilter = document.querySelector('.vacancies__filter');

export let appData = {
  lastUrl: '',
};
export const pagination = {};

export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadMoreVacancies();
      };
    });
  }, {
    rootMargin: '100px',
  },
);

const init = () => {
  try {
    // Open, close filter
    filterToggle();
  
    // Select city
    selectCityControl();
  
    // Cards
    vacancyControl();
  
    // Modal
    modalVacancyControl();
  
    // Filter
    filterFormControl();
  } catch (error) {
    console.warn("error: ", error);
  };

  try {
    formController();
    fileController();
  } catch (error) {
    console.warn("error: ", error);
  }
};

init()
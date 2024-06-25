import { filterForm, appData, API_URL, VACANCY_URL, vacanciesFilterBtn, vacanciesFilter } from '../script.js';
import { getData } from './getData.js';
import { renderVacancies } from './renderVacancies.js';
import { renderError } from './renderError.js';
import { closeFilter } from './openFilter.js';

export const filterFormControl = () => {
  filterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(filterForm);

    const urlWithParam = new URL(`${API_URL}${VACANCY_URL}`);

    formData.forEach((value, key) => {
      urlWithParam.searchParams.append(key, value);
    });
    
    getData(urlWithParam, renderVacancies, renderError).then(() => {
      appData.lastUrl = urlWithParam;
    }).then(() => {
      closeFilter(vacanciesFilterBtn, vacanciesFilter, 'vacancies__filter-btn_active', 'vacancies__filter_active');
    });
  });
};
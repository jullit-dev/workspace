import { vacanciesFilterBtn, vacanciesFilter } from '../script.js';

const openFilter = (btn, dropDpwn, classNameBtn, classNameDd) => {
  dropDpwn.style.height = `${dropDpwn.scrollHeight}px`;
  btn.classList.add(classNameBtn);
  dropDpwn.classList.add(classNameDd);
};

export const closeFilter = (btn, dropDpwn, classNameBtn, classNameDd) => {
  btn.classList.remove(classNameBtn);
  dropDpwn.classList.remove(classNameDd);
  dropDpwn.style.height = '';
};

export const filterToggle = () => {
  // Open, close filter
  vacanciesFilterBtn.addEventListener('click', () => {
    if (vacanciesFilterBtn.classList.contains('vacancies__filter-btn_active')) {
      closeFilter(vacanciesFilterBtn, vacanciesFilter, 'vacancies__filter-btn_active', 'vacancies__filter_active');
    } else {
      openFilter(vacanciesFilterBtn, vacanciesFilter, 'vacancies__filter-btn_active', 'vacancies__filter_active');
    }
  });

  window.addEventListener('resize', () => {
    if (vacanciesFilterBtn.classList.contains('vacancies__filter-btn_active')) {
      // vacanciesFilter.style.height = `${vacanciesFilter.scrollHeight}px`;
      closeFilter(vacanciesFilterBtn, vacanciesFilter, 'vacancies__filter-btn_active', 'vacancies__filter_active');
    }
  });
};
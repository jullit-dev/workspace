import { API_URL, VACANCY_URL } from '../script.js';
import { getData } from './getData.js';
import { renderError } from './renderError.js';
import { renderModal, modalBlock } from './renderModal.js';

const createDetailVacancy = (data) => 
  `
    <div class="detail__header">
      <img class="detail__logo" src="${API_URL}${data.logo}" alt="Логотип компании ${data.company}">
      <p class="detail__company">${data.company}</p>
      <h2 class="detail__title">${data.title}</h2>
    </div>

    <div class="detail__info">
      <p class="detail__descr">${data.description.replaceAll('\n', '<br>')}</p>
      <ul class="detail__fields">
        <li class="detail__field">от ${parseInt(data.salary).toLocaleString()}₽</li>
        <li class="detail__field">${data.type}</li>
        <li class="detail__field">${data.format}</li>
        <li class="detail__field">${data.experience}</li>
        <li class="detail__field">${data.location}</li>
      </ul>
    </div>

    <p class="detail__resume">Отправляйте резюме на <a class="accent-text" href="mailto:${data.email}">${data.email}</a></p>
`;

const addDetailVacancy = (data) => {
  modalBlock.innerHTML = '';
  modalBlock.innerHTML = createDetailVacancy(data);
}



export const openModal = (id) => {
  renderModal();
  getData(`${API_URL}${VACANCY_URL}/${id}`, addDetailVacancy, renderError);
};
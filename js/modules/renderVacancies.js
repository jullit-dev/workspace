import { cardsList, pagination, observer } from '../script.js';
import { createCards } from './createCards.js';

export const renderVacancies = (data) => {
  cardsList.textContent = '';
  const cards = createCards(data);
  cardsList.append(...cards);
  if (data.pagination) {
    Object.assign(pagination, data.pagination);
  }
  observer.observe(cardsList.lastElementChild);
};
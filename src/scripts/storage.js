import { renderEvents } from './render-events.js';

export { setItemToStorage, getItemFromStorage };

//  Набор Пункт хранения

const setItemToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
const getItemFromStorage = (key) => JSON.parse(localStorage.getItem(key));


function onStorageChange(event) {
    if (event.key === 'events') {
        renderEvents();
    }
}
window.addEventListener('storage', onStorageChange);
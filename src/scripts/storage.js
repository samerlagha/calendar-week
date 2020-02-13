import { renderEvents } from './render-events.js'

export { setItemToStorage, getItemFromStorage };

//установить пункт для хранения

const setItemToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

//получить Item из хранилища
const getItemFromStorage = (key) => JSON.parse(localStorage.getItem(key));


//Изменение хранилища
const onStorageChange = event =>{
    if (event.key === 'events') {
        renderEvents();
    }
};
window.addEventListener('storage', onStorageChange);

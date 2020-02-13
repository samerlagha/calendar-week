<<<<<<< HEAD
import { renderEvents } from './render-events.js';

export { setItemToStorage, getItemFromStorage };

//  Набор Пункт хранения
=======
import { renderEvents } from './render-events.js'

export { setItemToStorage, getItemFromStorage };

//установить пункт для хранения
>>>>>>> 9f5109efc24327092473f1dedabee7d38d486213

const setItemToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
<<<<<<< HEAD
const getItemFromStorage = (key) => JSON.parse(localStorage.getItem(key));


function onStorageChange(event) {
    if (event.key === 'events') {
        renderEvents();
    }
}
window.addEventListener('storage', onStorageChange);
=======

//получить Item из хранилища
const getItemFromStorage = (key) => JSON.parse(localStorage.getItem(key));


//Изменение хранилища
const onStorageChange = event =>{
    if (event.key === 'events') {
        renderEvents();
    }
};
window.addEventListener('storage', onStorageChange);
>>>>>>> 9f5109efc24327092473f1dedabee7d38d486213

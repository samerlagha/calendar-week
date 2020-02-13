import { setItemToStorage, getItemFromStorage } from './storage.js';
import { renderEvents } from './render-events.js';
import { popupForm, closePopup } from './create-popup.js';

export { editSaveHandler };

<<<<<<< HEAD
// редактировать & Сохранить обработчик
=======
//редактировать Сохранить Handler

>>>>>>> 9f5109efc24327092473f1dedabee7d38d486213
const editSaveHandler = event => {

    event.preventDefault();
    const events = getItemFromStorage('events') || [];

    const formData = [...new FormData(popupForm)];
    const newEvent = formData.reduce((acc, item) => {
        acc[item[0]] = item[1];
        return acc;
    }, {});

    // формат времени
    
    const timeFrom = (newEvent.timeFrom).split(':');
    newEvent.dateFrom = new Date(new Date(newEvent.dateFrom).setHours(+timeFrom[0], +timeFrom[1]));
    const timeTo = (newEvent.timeTo).split(':');
    newEvent.dateTo = new Date(new Date(newEvent.dateTo).setHours(+timeTo[0], +timeTo[1]));

    if (newEvent.id === "0") {
        newEvent.id = Math.floor(Math.random() * 1000);

        if (newEvent.title == '') {
            newEvent.title = 'нет названий';
        }
        events.push(newEvent);
        
    } else {

        events.map((event, index) => {
            if (newEvent.id == event.id) {
                events.splice(index, 1);
            }
            return event;
        });
        events.push(newEvent);
    }

    setItemToStorage('events', events);
    closePopup();
    renderEvents();
    console.log(events);
}
//добавить  событий submit
popupForm.addEventListener('submit', editSaveHandler);

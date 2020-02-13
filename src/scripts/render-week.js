import { currentWeek } from './render-current-week.js';

export { createDaysOfWeek };

<<<<<<< HEAD
//создать дни недели

function createDaysOfWeek(week){
    const daysContainer = document.querySelector('.days-container');
    daysContainer.innerHTML = '';

    // GMT Block

=======
const createDaysOfWeek = week => {
    const daysContainer = document.querySelector('.days-container');
    daysContainer.innerHTML = '';
   
    // GTM Block
>>>>>>> 9f5109efc24327092473f1dedabee7d38d486213
    const gmtBlock = document.createElement('div');
    gmtBlock.textContent = 'GMT+02';
    gmtBlock.classList.add('gmt');
    daysContainer.append(gmtBlock);
<<<<<<< HEAD


    // day name  & date of week
=======
    
    // days of week
>>>>>>> 9f5109efc24327092473f1dedabee7d38d486213
    
    for (let i = 0; i < week.length; i++){
     const oneDay = document.createElement('div');
        oneDay.classList.add('day');
        //day name
        const dayName = document.createElement('span');
        dayName.classList.add('day-name');
        dayName.textContent = week[i].toDateString().split(' ')[0];
        oneDay.append(dayName);
       // day date
        const dayDate = document.createElement('div');
        dayDate.classList.add('day-date');
        dayDate.textContent = week[i].getDate();
        oneDay.append(dayDate);

        if (week[i].toDateString() == new Date().toDateString()) {
            dayDate.classList.add('day-date_current');
        }
        
        daysContainer.append(oneDay);
    }
};

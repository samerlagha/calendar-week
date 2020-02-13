//сделать боковую панель
const  renderSidebar =  ()=> {
  const sidebar = document.querySelector('.sidebar');
   
  //hours day
  for (let hour = 0; hour < 24; hour++) {
    
    const sidebarHour = document.createElement('div');
    sidebarHour.classList.add('sidebar__hour');
    //text hour in sidebar
    const sidebarHourText = document.createElement('span');
    sidebarHourText.classList.add('sidebar__hour-text');
     // if our less then 10 we add '0' before hour
    sidebarHourText.textContent = `${(hour < 10) ? '0' + hour : hour}:00`;
       
    sidebar.append(sidebarHour);
    sidebarHour.append(sidebarHourText);
  } ;
  
   // add class for first hour in sidebar
  const firstHour = sidebar.firstChild;
  firstHour.classList.add('sidebar__no-display');
};

renderSidebar();

export { renderSidebar };

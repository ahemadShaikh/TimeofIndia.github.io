

// dark mode / light mode
let target = document.getElementsByTagName('html')[0];  // targeting the html element.
let mode = document.getElementsByClassName('switchMode')[0];  
let sun = document.getElementsByClassName('sun')[0];   // targeting sun name class element.
let moon = document.getElementsByClassName('moon')[0];   // targeting moon name class element.
mode.addEventListener('click',()=>{
    target.classList.toggle('lightMode');
    checkForSunIcon(target,sun,moon);
});


// let describe date on the place


// targting all elements for changes
let Day = document.getElementsByClassName('day')[0];  // targeting the weekday element.
let Month = document.getElementsByClassName('month')[0];    // targeting the month element.
let date = document.getElementsByClassName('date')[0];    // targeting the current date elememt.
let Year = document.getElementsByClassName('year')[0];     // targeting the current year element to make changes.
let hour = document.getElementsByClassName('hour')[0];     // targeting the current time in hour span element
let minute = document.getElementsByClassName('minute')[0];   // targeting current time in minute span element

// running everyuSecond
setInterval(()=>{
    // describing all the values in variables
    let currentDate = new Date();  // creating new date object
    let currentDay = currentDate.getDate();   // representing current date 
    let currentMonth = returnStringMonth(currentDate.getMonth());   // representing current month with string name
    let currentYear = currentDate.getFullYear();   // representing current year.
    let weekDay = returnStringDay(currentDate.getDay());   // representing current weekdays in string .
    let currentHour = currentDate.getHours().toString().length==2?currentDate.getHours():`0${currentDate.getHours()}`;    
    let currentMinute = currentDate.getMinutes().toString().length==2?currentDate.getMinutes():`0${currentDate.getMinutes()}`;


    Day.innerHTML=weekDay;   // assigning current weekday in string value ex. Mon..... sun
    Month.innerHTML=currentMonth;    // assigning current month name in string ex. jan....... dec
    date.innerHTML=currentDay;     // assigning current date of month in number .
    Year.innerHTML=currentYear;     // assigning current year in element.
    hour.innerHTML=currentHour;     // assigning current hourse 
    minute.innerHTML=currentMinute;    // assigning current minutes 
},1000)















// returning string of current weekdays
function returnStringDay(Day){
    switch(Day)
    {
        case 1: return 'Monday';
        break;
        case 2: return 'Tuesday';
        break;
        case 3: return 'Wednesday';
        break;
        case 4: return 'Thursday';
        break;
        case 5: return 'Friday';
        break;
        case 6: return 'Saturday';
        break;
        case 0: return 'Sunday';
        break;
        default: break;
    }
}


// returning string of current month
function returnStringMonth(Month){
    switch(Month){
        case 0: return 'Jan';
        break;
        case 1: return 'Feb';
        break;
        case 2: return 'Mar';
        break;
        case 3: return 'Apl';
        break;
        case 4: return 'May';
        break;
        case 5: return 'jun';
        break;
        case 6: return 'jul';
        break;
        case 7: return 'Aug';
        break;
        case 8: return 'Sep';
        break;
        case 9: return 'Oct';
        break;
        case 10: return 'Nov';
        break;
        case 11: return 'Dec';
        break;
        default: break;
    }
}

// function to check for icons/light/dark moment
function checkForSunIcon(target,sun,moon){
    if(target.classList.contains('lightMode')){
        moon.style.display = 'block';
        moon.style.color = 'black';
        sun.style.display = 'none';
    }
    else{
        moon.style.display = 'none';
        sun.style.display = 'block';
    }
}

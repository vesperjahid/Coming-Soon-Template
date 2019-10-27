const count = document.querySelector('.countdown');
// set launch time
const lunchdate = new Date('Jan 1, 2030 2:35:00').getTime();

//update every second
const intrvl = setInterval(() => {
    //get todays date
    const now = new Date().getTime();
    //distance from now to launch
    const distance = lunchdate - now;
    
    // time calculating
    
    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor(distance%(1000*60*60*24)/(1000*60*60));
    const mins = Math.floor(distance%(1000*60*60)/(1000*60));
    const seconds = Math.floor(distance%(1000*60)/(1000));
    
    //display result
    
    count.innerHTML =`
    <div> ${days}<span>Days </span></div>
    <div> ${hours}<span>Hours </span> </div>
    <div> ${mins}<span>Minutes </span> </div>
    <div> ${seconds}<span>Sedconds </span> </div>
`;span
    if(distance<0){
        clearInterval(intrvl);
        count.style.color = '#17a2b8';
        count.innerHTML = 'Launched';
    }
    
},1000);
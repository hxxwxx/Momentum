const clock = document.querySelector("#clock");

function getClock(){
   const date = new Date();  
   const hours = String(date.getHours()).padStart(2,"0");
   const minutes = String(date.getMinutes()).padStart(2,"0");
   const seconds = String(date.getSeconds()).padStart(2,"0");
   clock.innerText=`${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock,1000);

// 아 hours 따로 minutes 따로 seconds 따로 해서 자릿수를 채워줘야 하구나 
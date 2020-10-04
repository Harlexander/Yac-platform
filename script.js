window.onload = () => {
    window.onscroll = () => {
let scroll = window.scrollY;
    if(scroll > 100){
        const nav = document.querySelector(".navbar");
        nav.style.background = "#1C2331";
     }
     else{
        const nav = document.querySelector(".navbar");
        nav.style.background = "rgba(0,0,0,.2)"
    }
}

   let phone = document.querySelector(".phone");
   let num = document.querySelector("#phone");
   let height = window.innerHeight;
   phone.addEventListener('click', () => {
       num.style.height = (height) + "px";
       if (num.style.display === "none"){
           num.style.display = "block";
       }else{
           num.style.display = "none";
       }
   });

   //create event timer

   const countDownDate = new Date("Oct 28, 2020 15:00:00").getTime();

   //update the time every second
   const x = setInterval(()=>{
       const currentDate = new Date().getTime();
       const diff = countDownDate - currentDate;


       let days = Math.floor(diff / (1000 * 60 * 60 * 24));
       let hrs = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
       let mins = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
       let secs = Math.floor(diff % (1000 * 60) / (1000));

       //input the result in the span element

       document.querySelector("#days").innerHTML = days;
       document.querySelector("#hrs").innerHTML = hrs;
       document.querySelector("#mins").innerHTML = mins;
       document.querySelector("#secs").innerHTML = secs;

       if(diff < 0){
           clearInterval(x);
           document.querySelector("#next").style.display = "none";
       };
   },1000)
}
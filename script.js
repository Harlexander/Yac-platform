window.onload = () => {
    var btn = document.querySelector(".up");

    window.onscroll = () => {
let scroll = window.scrollY;

    if(scroll > 100){
        const nav = document.querySelector(".navbar");
        nav.style.background = "#1C2331";
        btn.style.display = "block"
     }else{
        btn.style.display = "none"
     }
}
   btn.addEventListener("click", function() {
       document.body.scrollTop = 0;
       document.documentElement.scrollTop = 0;
   })
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

   const countDownDate = new Date("Oct 30, 2020 2:00:00").getTime();

   //update the time every second
   const x = setInterval(()=>{
       const currentDate = new Date().getTime();
       const diff = countDownDate - currentDate;


       let days = Math.floor(diff / (1000 * 60 * 60 * 24));
       let hrs = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
       let mins = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
       let sec = Math.floor(diff % (1000 * 60) / (1000));

       //input the result in the span element

       document.querySelector("#days").innerHTML = days;
       document.querySelector("#hrs").innerHTML = hrs;
       document.querySelector("#mins").innerHTML = mins;
       document.querySelector("#secs").innerHTML = sec;

       if(diff < 0){
           clearInterval(x);
           document.querySelector("#youtube").style.display = "block";
           document.querySelector("#time").style.display = "none";
           document.querySelector(".next").innerHTML = "Live Now !!!";
       };
   },1000)
}
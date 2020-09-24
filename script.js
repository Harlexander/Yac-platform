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

       
       
}


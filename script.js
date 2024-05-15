const header = document.querySelector(".hd");
const hamBurger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-bar-list");
const btnList = document.querySelector(".btn-container");
const tablehead = document.querySelectorAll('.table-head');
const tablebody = document.querySelectorAll('.table-body');


function openMenu() {
  header.classList.toggle("open");
  hamBurger.classList.toggle("open");
  navList.classList.toggle("show");
  btnList.classList.toggle("show");
}

hamBurger.addEventListener("click", openMenu);



const cards = document.querySelectorAll(".cards__card");

      cards.forEach((card, i) => {
        let start = i;
        setInterval(function () {
          start = start - 1;
          if (start < 0) start = 3;
          card.dataset.count = start;
        }, 2000); 
      });

  
// function opensvg(index){
//   if(tablebody[index].classList.contains("show-body")){
//     tablehead[index].classList.remove("svg-open")
//     tablebody[index].classList.remove("show-body")
//   }else{
//     tablehead[index].classList.add("svg-open")
//     tablebody[index].classList.add("show-body")
//   }
   
//   //  tablehead[index].classList.toggle("svg-open");
//   //  tablebody[index].classList.toggle("show-body");
  
//   }    

  tablehead.forEach((item, index)=>{
  item.addEventListener("click" , ()=>{
    if(tablebody[index].classList.contains("show-body")){
      tablehead[index].classList.remove("svg-open")
      tablebody[index].classList.remove("show-body")
    }else{
      tablehead[index].classList.add("svg-open")
      tablebody[index].classList.add("show-body")
    }
  });
  })
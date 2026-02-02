const list=document.querySelector(".navlist");              /* by clicking the hamburger logo in obile mode the headings will be shown*/
const hamburger=document.querySelector(".fa-bars");



hamburger.addEventListener("click", ()=>{
      hamburger.classList.toggle("fa-x");
      list.classList.toggle("navlist-active");
})

